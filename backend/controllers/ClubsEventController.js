import Event from "../models/Event.js"


export const getClubsEvents =async (req,res)=>{
    try {
        const clubId = req.club.id;

        // const clubsEvents = await Event.find({club:clubId})
        // const clubsEvents = await Event.find({ clubId }).populate('clubId');
        const clubsEvents = await Event.find({ club: clubId });
        
        res.json(clubsEvents);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: " error fetching clubs event"});
    }
};


export const editEvent = async(req,res)=>{
        try {
            const {id} = req.params;

            const{eventImage ,eventName , location , registrationStartDate , registrationEndDate , eventDate , registerLink , mode , paymentType} = req.body;

        const updatedEvent = await Event.findByIdAndUpdate(id , {
            eventImage,
            eventName,
            location,
            registrationStartDate,
            registrationEndDate,
            eventDate,
            registerLink,
            mode,
            paymentType,
            
        },
    {new: true});

      res.status(200).json({
      message: "Event updated successfully",
      event: updatedEvent
    });


        if(!updatedEvent){
            return res.status(404).json({message: "Event not found"})
        }


        } catch (error) {
            console.log(error);
            res.status(500).json({message: "server error"})
        }
}


export const deleteEvent =async (req , res)=>{
    try {
        const {id}= req.params

        const deleteById = await Event.findByIdAndDelete(id);

        if(!deleteById){
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({ message: "Event deleted successfully", deleteById });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}