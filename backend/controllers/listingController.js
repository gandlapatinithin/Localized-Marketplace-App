import Listing from '../models/listingModels.js';

// Get all listings
export const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.findAll();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get listing by ID
export const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findByPk(req.params.id);
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    res.json(listing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new listing
export const createListing = async (req, res) => {
  try {
    const newListing = await Listing.create(req.body);
    res.status(201).json(newListing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
