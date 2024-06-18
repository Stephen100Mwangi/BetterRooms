import { UserComments } from "../model/CommentsModel.js"

const fetchComment = async(req,res) => {
    try {
        const comments = await UserComments.find();
        if (comments.length === 0) {
            return res.status(200).send({message: "No comments to show"});
        }

        return res.status(200).send({message: "Comments fetched successfully",comments:comments});
    } catch (error) {
        return res.status(500).send({ message: "An error occurred while fetching comments", error });
    }
   

}

export default fetchComment
