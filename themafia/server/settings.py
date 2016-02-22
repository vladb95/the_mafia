MONGO_URI = 'mongodb://super_root:roottoor@ds062438.mongolab.com:62438/themafia'
RESOURCE_METHODS = ['GET', 'POST', 'DELETE']
ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']

DOMAIN = {
            'people': {
                    'schema': {
                            'name': {
                                'type': 'string',
                                'minlength': 1,
                                'maxlength': 32,
                                'required': True,
                            },
                            'image':{
                                'type':'string',
                                'minlength':1,
                                'maxlength':250
                            }
                        }
                    }
                }
