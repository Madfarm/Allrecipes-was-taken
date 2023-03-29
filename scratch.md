### Filter Implentations


in the ejs template -> form w/ dropdowns, submit button
                                            |
                                            v
                                         get request with a query string in the url


in the index routing, controller function

        if (req.query){
            Recipe.find(req.query)

        }


