<p align="center"><a href="https://reactjs.org" target="_blank"><img src="https://www.pinclipart.com/picdir/middle/91-918525_react-logos-download-green-tree-logo-tree-logo.png" width="400"></a></p>

Skill Optimizer - Web / Admin Panel

## Getting Started

1. npm install 

2. From Firebase navigate to Project settings -> General -> Your apps -> Copy the following:
{
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};
Then paste it to the Firebase Configuration file (Javascript file)
path: src/services/FireBaseConfig.js

3. In the public folder, you should insert the GSM sender id in the  manifest.json file. This can be obtained from Firebase: Navigate to Project settings->Cloud Messaging -> Project credentials -> Sender ID.

Manifest.json should contain:
{
    "Gsm_sender_id":"sender-id"
 }

Be sure to also include your Firebase Configuration to the firebase-message-sw.js file (which can also be found in the public folder)

4. Firebase Rules:
In order to have Firebase fully functioning, slight modifications in the rules are needed:

Firestore:
Firebase Firestore rules: (to ensure only authenticated users can access the collections)

rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
   		match /{document=**} {
      			allow read, write: if true && request.auth != null;
    		}
  	}
}

Storage:
Firebase Storage rules: (to ensure only authenticated users can access the collections)

rules_version = '2';
service firebase.storage {
match /b/{bucket}/o {
   		match /{allPaths=**} {
      			allow read: if true && request.auth != null;
      			allow write: if true && request.auth != null &&             
request.resource.contentType.matches('image/.*');
    		}
  	}
}

5. Head to resources/js/Firebase
In the init-fcm.js file, insert the VapidKey which can be found in Firebase: Project settings-> Cloud Messaging -> Web Configuration -> Key pair (You should create a new one)

Inside Init-fcm.js, paste the vapid key in the following line: 
messaging.usePublicVapidKey(“Vapidkey”)