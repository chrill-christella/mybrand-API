import cloudinary from 'cloudinary'
import 'dotenv/config'
import { ApplicationError } from '../common/errors/error';
import { StatusCodes } from 'http-status-codes';

cloudinary.config({ 
    url: process.env.CLOUDINARY_URL
  });

export const uploadFile = async (req,res,next) => {
    try {
        let imageUrl = ''
        await cloudinary.v2.uploader.upload(req.file.path, async function (err, image) {
            if (err) { 
               throw new ApplicationError(StatusCodes.INTERNAL_SERVER_ERROR, "Having a problem uploading file")
            }
            imageUrl = image.url
        });
        return imageUrl
    } catch (error) {
        next(error)
    }
    
}

export const deleteFile = async (image,req,res,next) => {
    try {
        const publicId = image.split("/")
        console.log(publicId[publicId.length-1].split('.')[0]);
        console.log(image);
        await cloudinary.v2.uploader.destroy(publicId[publicId.length-1].split('.')[0], async function (result) {
            console.log(result)
        
        });
    } catch (error) {
        next(error)
    }
    
}