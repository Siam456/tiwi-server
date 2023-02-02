const uploader = require("../utilities/singleupload");

function avatarUpload(req, res, next) {
  const upload = uploader(
    ["video/mp4", "application/pdf", "image/jpeg", "image/jpg", "image/png"],
    800000000,
    "Only .jpg, .jpeg, .png .pdf & .mp4 format allowed!"
  );

  // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

module.exports = avatarUpload;
