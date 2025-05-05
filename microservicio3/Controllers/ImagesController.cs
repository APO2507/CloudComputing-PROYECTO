
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

    [HttpPost]
    public async Task<IActionResult> Upload(IFormFile file)
    {
        if (file == null || file.Length == 0) return BadRequest("Invalid file.");
        var id = await _service.SaveImageAsync(file);
        return Ok(new { id });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(string id)
    {
        var result = await _service.GetImageAsync(id);
        if (result == null) return NotFound();
        return File(result, "image/jpeg");
    }
}
