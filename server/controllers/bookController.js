export const book_controller = async(req,res)=>{
    if (!req.name) {
        console.log("No name found");
        return res.status(400).send({message:"Name cannot be empty"});
    }
    if (!req.paymentMode) {
        console.log("You must input a payment mode");
        return res.status(400).send({message:"Payment mode cannot be empty"});
    }
    if (req.bookingType) {
        console.log("Booking type cannot be empty");
        return res.status(400).send({message:"Booking type cannot be empty"});
    }
    if (req.pricing) {
        console.log("Pricing mode cannot be empty");
        return res.status(400).send({message:"Pricing mode cannot be empty"});
    }
   

}