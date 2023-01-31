from silence.decorators import endpoint

@endpoint(
    route="/photosvaloration",
    method="GET",
    sql = "SELECT * FROM PhotosValoration"
)
def get_all():
    pass

######################################################################
@endpoint(
    route="/photosvaloration/$userId/$photoId",
    method="GET",
    sql = "SELECT * FROM PhotosValoration WHERE userId = $userId AND photoId = $photoId"
)
def get_by_id():
    pass

######################################################################
@endpoint(
    route="/photosvaloration/contador/$userId/$photoId",
    method="GET",
    sql = "SELECT COUNT(valorationsId) as contador FROM PhotosValoration WHERE userId = $userId AND photoId = $photoId"
)
def getcount():
    pass
######################################################################
@endpoint(
    route="/photosvaloration/$photoId",
    method="GET",
    sql="SELECT AVG(value) as Media FROM PhotosValoration WHERE photoId = $photoId",
    description="Creates a new photo",
    auth_required= True,
)
def get_avg():
    pass

#######################################################
@endpoint(
    route="/photosvaloration",
    method="POST",
    sql="INSERT INTO PhotosValoration (value, userId, photoId) VALUES ($value, $userId, $photoId)",
    description="Creates a new photo",
    auth_required= True,
)
def create(value, userId, photoId):
    pass

#######################################################



@endpoint(
    route="/photosvaloration/$valorationsId",
    method="PUT",
    sql = "UPDATE PhotosValoration SET value = $value WHERE valorationsId = $valorationsId",
    description="Creates a new photo",
    auth_required= True,

)
def update(value):
    pass

#######################################################


@endpoint(
    route="/photosvaloration/$valorationsId",
    method="DELETE",
    sql="DELETE FROM PhotosValoration WHERE valorationsId = $valorationsId",
    description="Removes a valoration",
    auth_required=True,
)
def delete():
    pass
