import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.find({id});
      res.status(200).json(user[0]);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
};

export const getUserConnections = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.find({id});
      console.log(user[0].connections);
      res.status(200).json(user[0].connections);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
};

/* UPDATE */
export const addRemoveConnection = async (req, res) => {
    try {
        const { id } = req.params;
        const { connectionId } = req.body;
        
        const userRes = await User.find({id});
        const connectionRes = await User.find({"id": connectionId});

        const user = userRes[0];
        const connection = connectionRes[0];
        
        console.log(user);
        console.log(connection);

        if (user.connections.includes(connectionId)) {
            user.connections = user.connections.filter((id) => id !== connectionId);
            connection.connections = connection.connections.filter((id) => id !== id);
        } else {
            user.connections.push(connectionId);
            connection.connections.push(id);
        }
        await user.save();
        await connection.save();
    
        const connections = await Promise.all(
            user.connections.map((id) => User.findById(id))
        );
        const formattedConnections = connections.map(
        ({ id, name, professionalDetails, picturePath }) => {
            return { id, name, professionalDetails, picturePath };
        }
        );
    
        res.status(200).json(formattedConnections);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

