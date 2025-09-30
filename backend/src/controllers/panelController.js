import Panel from "../models/Panel.js";
export const getAllPanel = async (req, res) => {
  try {
    const {country, state, district, daily_uses_kwh,} = req.body;
    const newPanel = await Panel.find({
        country, state, district,
    });
    getLocation(district, state, country);
    const panel1_watt = 400; // trating of panel
    const total_watt_per_day = panel1_watt * daily_peak_sun_hours;
    const requiredPanel = total_watt_per_day/(daily_usrs_kwh*1000);
    res.status(200).json({requiredPanel});

  } catch (error) {
    console.error("Error in getAllPanel:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
