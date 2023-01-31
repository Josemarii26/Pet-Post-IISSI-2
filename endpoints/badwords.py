from silence.decorators import endpoint


@endpoint(
    route="/badwords",
    method="GET",
    sql = "SELECT * FROM Badwords"
)
def get_all():
    pass

######################################################################