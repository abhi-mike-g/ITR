<?php
/**
 * InstaFuel theme setup.
 *
 * @package InstaFuel
 */

defined( 'ABSPATH' ) || exit;

define( 'INSTAFUEL_VERSION', '1.0.0' );

require_once get_template_directory() . '/inc/content.php';
require_once get_template_directory() . '/inc/helpers.php';

add_action( 'after_setup_theme', function () {
	load_theme_textdomain( 'instafuel', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array( 'height' => 60, 'width' => 200, 'flex-width' => true ) );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );

	add_theme_support( 'woocommerce' );
	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' );

	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu', 'instafuel' ),
			'footer'  => __( 'Footer Menu', 'instafuel' ),
		)
	);
} );

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'instafuel-fonts', 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap', array(), null );
	wp_enqueue_style( 'instafuel-main', get_template_directory_uri() . '/assets/css/main.css', array(), INSTAFUEL_VERSION );
	wp_enqueue_script( 'instafuel-main', get_template_directory_uri() . '/assets/js/main.js', array(), INSTAFUEL_VERSION, array( 'strategy' => 'defer' ) );
} );

add_action( 'widgets_init', function () {
	register_sidebar(
		array(
			'name'          => __( 'Shop Sidebar', 'instafuel' ),
			'id'            => 'shop-sidebar',
			'before_widget' => '<section class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
} );

// Use the theme's own wrappers instead of WooCommerce's defaults.
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );

add_filter( 'woocommerce_add_to_cart_fragments', function ( $fragments ) {
	$fragments['span.cart-count'] = '<span class="cart-count">' . esc_html( WC()->cart->get_cart_contents_count() ) . '</span>';
	return $fragments;
} );

add_filter( 'loop_shop_columns', fn() => 4 );
