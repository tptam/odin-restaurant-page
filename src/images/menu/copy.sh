#!/bin/bash

# Array of new filenames
filenames=(
    "garden_harvest_bowl.jpg"
    "herb_crusted_goat_cheese_salad.jpg"
    "zesty_citrus_avocado_salad.jpg"
    "green_goddess_sandwich.jpg"
    "herb_roasted_chicken_panini.jpg"
    "portobello_steak_sandwich.jpg"
    "vegetable_quiche.jpg"
    "herbed_quinoa_stuffed_peppers.jpg"
    "seasonal_vegetable_frittata.jpg"
    "roasted_tomato_basil_soup.jpg"
    "vegetable_minestrone.jpg"
    "fresh_herb_lemonade.jpg"
    "green_goddess_smoothie.jpg"
    "iced_hibiscus_tea.jpg"
    "urban_oasis_cold_brew.jpg"
    "lavender_honey_panna_cotta.jpg"
    "herb_infused_fruit_crumble.jpg"
    "lemon_basil_sorbet.jpg"
)

# Loop through the array and copy/rename files
for new_filename in "${filenames[@]}"; do
    cp "150x150.jpg" "$new_filename"
    echo "Created: $new_filename"
done

echo "All files have been copied and renamed."
