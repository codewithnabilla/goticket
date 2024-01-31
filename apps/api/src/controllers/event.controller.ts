import prisma from '@/prisma';
import { Request, Response } from 'express';

export class EventController {
  async getEvent(req: Request, res: Response) {
    const allEvent = await prisma.event.findMany();

    return res.status(200).send(allEvent);
  }

  async getEventById(req: Request, res: Response) {
    const { id } = req.params;

    const eventById = await prisma.event.findUnique({
      where: { id: parseInt(id) },
    });

    return res.status(200).send(eventById);
  }

  async organizerEvent(req: Request, res: Response) {
    try {
      let events;
      const userIdFromToken = req.dataUser;
      if (userIdFromToken.id) {
        events = await prisma.event.findMany({
          where: { organizer_id: userIdFromToken.id },
        });
        return res.json(events);
      }
    } catch (error: any) {
      console.error(error);
      return res
        .status(500)
        .json({ error: error.message || 'Internal Server Error' });
    }
  }
}
