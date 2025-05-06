using System.IO;
using Microsoft.AspNetCore.Mvc;
using VetImagesService.Models;
using VetImagesService.Services;

namespace VetImagesService.Controllers;

[ApiController]
[Route("[controller]")]
public class ImagesController : ControllerBase
{
    private readonly ImageStorageService _service;
    public ImagesController(ImageStorageService service) => _service = service;

    [HttpPost("upload")]
    public async Task<IActionResult> Upload([FromForm] IFormFile file, [FromForm] string consultaId)
    {
        if (file == null || file.Length == 0) return BadRequest("Invalid file.");
        var id = await _service.SaveImageAsync(file, consultaId); // este método debe recibir el consultaId
        return Ok(new { id });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(string id)
    {
        var result = await _service.GetImageAsync(id);
        if (result == null) return NotFound();
        var (stream, contentType) = result.Value;
        return File(stream, contentType, enableRangeProcessing: true);

    }

    [HttpGet("consulta/{consultaId}")]
    public async Task<IActionResult> GetImagesByConsulta(string consultaId)
    {
        var images = await _service.GetImagesByConsultaIdAsync(consultaId);
        return Ok(images);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteImage(string id)
    {
        await _service.DeleteImageAsync(id);
        return Ok(new { deleted = true });
    }


}
