from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Love, db
import json

loves_routes = Blueprint('loves', __name__)

# ****************** GET LOVES BY USER ***************************

# ****************** ADD PRODUCT TO LOVES BY PRODUCT ID ***************************

# ****************** DELETE PRODUCT FROM LOVES BY PRODUCT ID ***************************

# ****************** DELETE PRODUCT FROM LOVES BY LOVES ID ***************************
