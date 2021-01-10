import firebase from 'firebase/app';
import 'firebase/storage';
import moment from "moment";

//  Uploading image to Firebase Cloud Storage
export const cloudImageUpload = async (basePath, imageFile) => {

    // Upload Image to Cloud storage + get link
    const storageRef = firebase.storage().ref();
    // Prepare datetime combination to include in file name
    const currentDateTime = moment().format("DDMMYYYYhhmmss_");
    // Prepare path
    const path = basePath + currentDateTime + imageFile.fileName;
    // Prepare image Ref with Firebase Storage
    const imageRef = storageRef.child(path);
    // Uploading image
    await imageRef.put(imageFile.file);
    // Get downloadURL
    const downloadURL = await imageRef.getDownloadURL();
    return downloadURL;
};
