DELIMITER //
CREATE OR REPLACE TRIGGER limitPhotoUser
BEFORE INSERT ON Photos
FOR EACH ROW
BEGIN
DECLARE numberOfPhotos INT;
SET numberOfPhotos = (SELECT COUNT(*) FROM Photos WHERE userId = new.userId);
IF((numberOfPhotos) >= 2) THEN
SIGNAL SQLSTATE '45000' SET message_text =
'A user cannot upload more than 50 photos.';
END IF;
END //
DELIMITER ;

