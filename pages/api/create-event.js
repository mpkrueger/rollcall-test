import { getSession } from "next-auth/client";
import { createEvent } from "../../lib/api";

export default async function handler(req, res) {
    const session = await getSession({ req });

    if (!session) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }

    const { name, description, image, organizationId } = req.body;

    if (!name || !description || !image || !organizationId) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }

    const eventId = await createEvent(name, description, image, organizationId);

    res.status(200).json({ eventId });
}
