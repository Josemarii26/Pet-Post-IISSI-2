CREATE OR REPLACE VIEW PhotoWithUsers AS
    SELECT P.*, U.username, U.avatarUrl
    FROM Photos P NATURAL JOIN Users U;