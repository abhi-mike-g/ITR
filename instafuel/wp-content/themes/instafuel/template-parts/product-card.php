<?php
/**
 * Product card for a real WooCommerce product.
 *
 * @package InstaFuel
 */

defined( 'ABSPATH' ) || exit;

/** @var WC_Product $product */
$product = $args['product'];
// WooCommerce loop functions read the global product.
$GLOBALS['product'] = $product;
?>
<article class="product-card">
	<a href="<?php echo esc_url( $product->get_permalink() ); ?>" class="product-thumb">
		<?php if ( $product->is_on_sale() ) : ?>
			<span class="badge"><?php esc_html_e( 'Sale', 'instafuel' ); ?></span>
		<?php endif; ?>
		<?php echo $product->get_image( 'woocommerce_thumbnail' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
	</a>
	<h3 class="product-name"><a href="<?php echo esc_url( $product->get_permalink() ); ?>"><?php echo esc_html( $product->get_name() ); ?></a></h3>
	<div class="product-price"><?php echo wp_kses_post( $product->get_price_html() ); ?></div>
	<?php
	woocommerce_template_loop_add_to_cart( array( 'class' => 'btn btn-block add_to_cart_button ajax_add_to_cart' ) );
	?>
</article>
