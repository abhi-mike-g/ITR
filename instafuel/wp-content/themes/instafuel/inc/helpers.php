<?php
/**
 * Template helpers.
 *
 * @package InstaFuel
 */

defined( 'ABSPATH' ) || exit;

function instafuel_has_woocommerce() {
	return class_exists( 'WooCommerce' );
}

function instafuel_shop_url() {
	return instafuel_has_woocommerce() ? wc_get_page_permalink( 'shop' ) : home_url( '/' );
}

/** Link to a product category archive, falling back to the shop page if it doesn't exist. */
function instafuel_category_url( $slug ) {
	if ( instafuel_has_woocommerce() ) {
		$link = get_term_link( $slug, 'product_cat' );
		if ( ! is_wp_error( $link ) ) {
			return $link;
		}
	}
	return instafuel_shop_url();
}

function instafuel_price( $amount ) {
	return '₹' . number_format_i18n( $amount );
}

/** Inline SVG icons, stroke-based so they inherit currentColor. */
function instafuel_icon( $name ) {
	$paths = array(
		'brain'  => '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
		'heart'  => '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
		'bone'   => '<path d="M7 17l10-10M6 14a2 2 0 1 0 2 4 2 2 0 1 0 4-2M18 10a2 2 0 1 0-2-4 2 2 0 1 0-4 2"/>',
		'drop'   => '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
		'shield' => '<path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
		'scale'  => '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9a4 4 0 0 1 6 0l-2 3"/>',
		'bolt'   => '<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
		'leaf'   => '<path d="M5 19c0-8 5-14 14-14 0 9-6 14-14 14zM5 19l7-7"/>',
		'cart'   => '<path d="M3 4h2l2.5 11h11L21 7H6.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/>',
		'user'   => '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/>',
		'search' => '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
		'menu'   => '<path d="M4 7h16M4 12h16M4 17h16"/>',
		'arrow'  => '<path d="M5 12h14M13 6l6 6-6 6"/>',
	);
	$path = $paths[ $name ] ?? '';
	return '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' . $path . '</svg>';
}
