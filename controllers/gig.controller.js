import createError from '../utils/createError.js';
import Gig from '../models/gig.model.js';

export const createGig = async (req, res, next) => {
  if (!req.isSeller) return next(createError(40, 'Only sellers can create gig!'));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const saveGig = newGig.save();
    res.status(201).json(saveGig);
  } catch (error) {
    console.log(error);
  }
};
export const deleteGig = async (req, res, next) => {};
export const getGig = async (req, res, next) => {};
export const getGigs = async (req, res, next) => {};
