using Microsoft.AspNetCore.Http;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;

namespace VetImagesService.Services
{
public class ImageStorageService
{
    private readonly IMongoDatabase _database;
    private readonly GridFSBucket _bucket;

    public ImageStorageService()
    {
        var client = new MongoClient("mongodb://mongo:27017");
        _database = client.GetDatabase("VetImagesDb");
        _bucket = new GridFSBucket(_database);
    }

    public async Task<string> SaveImageAsync(IFormFile file)
    {
        using var stream = file.OpenReadStream();
        var options = new GridFSUploadOptions
        {
            Metadata = new BsonDocument
            {
                { "contentType", file.ContentType }
            }
        };
        var id = await _bucket.UploadFromStreamAsync(file.FileName, stream, options);
        return id.ToString();
    }

    public async Task<byte[]?> GetImageAsync(string id)
    {
        try
        {
            var objectId = ObjectId.Parse(id);
            return await _bucket.DownloadAsBytesAsync(objectId);
        }
        catch
        {
            return null;
        }
    }
}
}
