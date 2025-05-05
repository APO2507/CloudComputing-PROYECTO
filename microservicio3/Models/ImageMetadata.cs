
namespace VetImagesService.Models;

public class ImageMetadata
{
    public string Id { get; set; } = null!;
    public string FileName { get; set; } = null!;
    public DateTime UploadedAt { get; set; } = DateTime.UtcNow;
}
