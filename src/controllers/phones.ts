import { Request, Response } from 'express';
import { Phones, PhonesAbout } from '../models/Phones';
import { Op } from 'sequelize';


export const getPhoneById = async(req: Request, res: Response) => {
    const { phoneId } = req.params;
    const regex = /^\d+$/;
  
    if (!regex.test(phoneId)) {
      res.sendStatus(400);
  
      return;
    }
  
    const phones = await Phones.findByPk(phoneId);
  
    if (!phones) {
      res.sendStatus(404);
  
      return;
    }
  
    res.status(200).send(phones);
  };

  export const getAllPhones = async (req: Request, res: Response) => {
    const {
      sortBy = 'price',
      sortOrder = 'ASC',
      from,
      to,
      query,
    } = req.query;
  
    let offset = 0;
    let limit;
  
    if (from) {
      offset = Number(from);
    }
  
    if (to) {
      limit = Number(to);
    }
  
    const phones = await Phones.findAll({
      where: {
        phoneId: {
          [Op.like]: `%${query ? query : 'apple'}%`,
        },
      },
      order: [[`${sortBy}`, `${sortOrder}`]],
      offset,
      limit,
    });
  
    res.send(phones);
  };

  export const getPhoneAboutById = async(req: Request, res: Response) => {
    const { phoneId } = req.params;
  
    if (!phoneId) {
      res.sendStatus(400);
  
      return;
    }
  
    const phoneAbout = await PhonesAbout.findByPk(phoneId);
  
    if (!phoneAbout) {
      res.sendStatus(404);
  
      return;
    }
  
    res.status(200).send(phoneAbout);
  };