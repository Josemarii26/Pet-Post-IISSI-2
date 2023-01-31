from silence.decorators import endpoint

@endpoint(
    route="/users/$userId",
    method="GET",
    sql = "SELECT * FROM Users Where userId = $userId"
)
def get_by_id():
    pass

######################################################################

@endpoint(
    route="/users",
    method="GET",
    sql = "SELECT * FROM Users"
)
def get_all():
    pass



