const bookBNB = async(req,res) =>{
    try {
        const {
            city,
            neighborhood,
            roomType,
            propertyType,
            priceRange,
            payment,
            minimumReviews,
            annual_availability,
            minimumRating,
            minimumNights, 
            no_Beds, 
            no_Bedrooms 
    
        }    = req.body;
    
        if (!city || !neighborhood || !roomType || !priceRange || !propertyType || !payment || !minimumNights || !minimumRating || !minimumReviews || !annual_availability || !no_Bedrooms || !no_Beds) {
            return res.status(400).send({message:"All fields must me completed"})
        }
        return res.status(200).send({message:"Hurray. Listing successfully located",userRequest:req.body})

        
    } catch (error) {
        return res.status(500).message({error:"Failed to fetch"})
    }
    

}

export default bookBNB