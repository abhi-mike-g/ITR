<?php
/**
 * Product card used before any WooCommerce products exist.
 *
 * @package InstaFuel
 */

defined( 'ABSPATH' ) || exit;

$on_sale = ! empty( $args['regular'] );
?>
<article class="product-card">
	<a href="<?php echo esc_url( instafuel_shop_url() ); ?>" class="product-thumb">
		<?php if ( $on_sale ) : ?>
			<span class="badge"><?php esc_html_e( 'Sale', 'instafuel' ); ?></span>
		<?php endif; ?>
		<span class="placeholder-img" aria-hidden="true"><span class="bottle"></span></span>
	</a>
	<h3 class="product-name"><?php echo esc_html( $args['name'] ); ?></h3>
	<div class="product-price">
		<?php if ( $on_sale ) : ?>
			<del><?php echo esc_html( instafuel_price( $args['regular'] ) ); ?></del>
		<?php endif; ?>
		<ins><?php echo esc_html( instafuel_price( $args['price'] ) ); ?></ins>
	</div>
	<a class="btn btn-block" href="<?php echo esc_url( instafuel_shop_url() ); ?>"><?php esc_html_e( 'Add to cart', 'instafuel' ); ?></a>
</article>
