# Accredian-frontend-task

![image](https://github.com/ShivanshAr97/Accredian-frontend-task/assets/96040322/4bff3818-be5b-4a17-becc-4d6953aa0d64)
Modern and visually appealing design.

![image](https://github.com/ShivanshAr97/Accredian-frontend-task/assets/96040322/5c7ee45b-394f-4088-978b-da7fbc427c4c)
Login & register functionality

![image](https://github.com/ShivanshAr97/Accredian-frontend-task/assets/96040322/efa0ac60-0bdd-4e9f-89f9-540dd37aff3e)
Dashboard, listing referral links,number of clicks 

there are 3 numbers:
1. Unique no. of times the link has been clicked: data taken from the session storage
2. New accounts with your referral: increased if someone signup using the link provided
3. Total no. of referral page clicks: the altogether count of clicks of a referral link, including reloads,etc

![image](https://github.com/ShivanshAr97/Accredian-frontend-task/assets/96040322/8b26d7ec-0dbb-48e9-a0e4-4046f9a5b4cf)
Products/course page, each enroll button has a referral code of the logged in user, whose dashboard was visible. 

![image](https://github.com/ShivanshAr97/Accredian-frontend-task/assets/96040322/3d34032b-efc0-4b1d-98ce-3bef951fac54)

- Created RESTful endpoints to save referral data filled in the referral form.
- Utilized Express.js for the backend server.
- Used Prisma ORM for establishing connectivity between the APIs and a MySQL database to store referral information.
- Proper handling of user data, including validation.
- Implemented error handling for various scenarios (e.g., missing fields, invalid data)
- Implemented functionality to send a referral email using the Google Mail Service API upon successful referral submission.
