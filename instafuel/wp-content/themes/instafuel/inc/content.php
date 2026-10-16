<?php
/**
 * Static homepage content. Category slugs match WooCommerce product categories
 * so links resolve once matching categories are created in the admin.
 *
 * @package InstaFuel
 */

defined( 'ABSPATH' ) || exit;

function instafuel_hero_slides() {
	return array(
		array(
			'eyebrow' => __( 'Daily wellness', 'instafuel' ),
			'title'   => __( 'Fuel your body the natural way', 'instafuel' ),
			'text'    => __( 'Clean, science-backed supplements for everyday energy and balance.', 'instafuel' ),
			'cta'     => __( 'Shop now', 'instafuel' ),
			'color'   => '#e8f3ea',
		),
		array(
			'eyebrow' => __( 'Limited offer', 'instafuel' ),
			'title'   => __( 'Up to 30% off immunity essentials', 'instafuel' ),
			'text'    => __( 'Stock up on your seasonal staples while the offer lasts.', 'instafuel' ),
			'cta'     => __( 'View offers', 'instafuel' ),
			'color'   => '#fff2e0',
		),
		array(
			'eyebrow' => __( 'New arrivals', 'instafuel' ),
			'title'   => __( 'Plant-powered protein, reimagined', 'instafuel' ),
			'text'    => __( 'Great taste, gentle on digestion and packed with nutrients.', 'instafuel' ),
			'cta'     => __( 'Discover', 'instafuel' ),
			'color'   => '#e6f0fb',
		),
	);
}

function instafuel_concerns() {
	return array(
		array( 'slug' => 'brain-health', 'name' => __( 'Brain Health', 'instafuel' ), 'icon' => 'brain' ),
		array( 'slug' => 'heart-health', 'name' => __( 'Heart Health', 'instafuel' ), 'icon' => 'heart' ),
		array( 'slug' => 'joint-support', 'name' => __( 'Joint Support', 'instafuel' ), 'icon' => 'bone' ),
		array( 'slug' => 'liver-support', 'name' => __( 'Liver Support', 'instafuel' ), 'icon' => 'drop' ),
		array( 'slug' => 'immune-health', 'name' => __( 'Immune Health', 'instafuel' ), 'icon' => 'shield' ),
		array( 'slug' => 'weight-management', 'name' => __( 'Weight Management', 'instafuel' ), 'icon' => 'scale' ),
		array( 'slug' => 'vigor-vitality', 'name' => __( 'Vigor & Vitality', 'instafuel' ), 'icon' => 'bolt' ),
		array( 'slug' => 'stress-relief', 'name' => __( 'Stress & Anxiety Relief', 'instafuel' ), 'icon' => 'leaf' ),
	);
}

function instafuel_categories() {
	return array(
		array( 'slug' => 'vitamins', 'name' => __( 'Vitamins & Minerals', 'instafuel' ), 'color' => '#ffe9d6' ),
		array( 'slug' => 'protein', 'name' => __( 'Protein', 'instafuel' ), 'color' => '#dff1ff' ),
		array( 'slug' => 'herbal', 'name' => __( 'Herbal & Ayurveda', 'instafuel' ), 'color' => '#e3f5e1' ),
		array( 'slug' => 'omega', 'name' => __( 'Omega & Fish Oil', 'instafuel' ), 'color' => '#fff6cc' ),
	);
}

function instafuel_offers() {
	return array(
		array( 'title' => __( 'Buy 2, get 1 free', 'instafuel' ), 'text' => __( 'On all multivitamins', 'instafuel' ), 'color' => '#1f6f43' ),
		array( 'title' => __( 'Flat 20% off', 'instafuel' ), 'text' => __( 'Your first order with code WELCOME20', 'instafuel' ), 'color' => '#e0712c' ),
	);
}

/** Shown in "Best Sellers" when WooCommerce has no products yet. */
function instafuel_placeholder_products() {
	return array(
		array( 'name' => __( 'Daily Multivitamin', 'instafuel' ), 'price' => 699, 'regular' => 899 ),
		array( 'name' => __( 'Omega-3 Softgels', 'instafuel' ), 'price' => 849, 'regular' => 0 ),
		array( 'name' => __( 'Ashwagandha Capsules', 'instafuel' ), 'price' => 499, 'regular' => 649 ),
		array( 'name' => __( 'Plant Protein — Chocolate', 'instafuel' ), 'price' => 1999, 'regular' => 0 ),
		array( 'name' => __( 'Vitamin D3 + K2', 'instafuel' ), 'price' => 549, 'regular' => 0 ),
		array( 'name' => __( 'Liver Detox Blend', 'instafuel' ), 'price' => 799, 'regular' => 999 ),
		array( 'name' => __( 'Biotin Gummies', 'instafuel' ), 'price' => 599, 'regular' => 0 ),
		array( 'name' => __( 'Joint Care Collagen', 'instafuel' ), 'price' => 1299, 'regular' => 1499 ),
	);
}
