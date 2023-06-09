import Gig from '../models/gig.model.js';
import createError from '../utils/createError.js';

export const createGig = async (req, res, next) => {
  if (!req.isSeller) return next(createError(40, 'Only sellers can create gig!'));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const saveGig = await newGig.save();
    res.status(201).json(saveGig);
  } catch (error) {
    console.log(error);
  }
};
export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (gig.userId !== req.userId) return next(createError(403, 'You can delete only your gig!'));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send('Gig has been deleted!');
  } catch (error) {
    console.log(error);
  }
};
export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return next(createError(404, 'Gig not found!'));
    res.status(200).send(gig);
  } catch (error) {
    console.log(error);
  }
};
export const getGigs = async (req, res, next) => {
  try {
    const gigs = await Gig.find();
    if (!gigs) return next(createError(404, 'Gig not found!'));
    res.status(200).send(gigs);
  } catch (error) {
    console.log(error);
  }
};
