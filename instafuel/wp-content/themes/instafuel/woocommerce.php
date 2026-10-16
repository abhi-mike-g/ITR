<?php
/**
 * Wrapper for WooCommerce shop, category and single-product views.
 *
 * @package InstaFuel
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>
<div class="container page-wrap<?php echo is_product() ? '' : ' shop-layout'; ?>">
	<?php if ( ! is_product() && is_active_sidebar( 'shop-sidebar' ) ) : ?>
		<aside class="shop-sidebar"><?php dynamic_sidebar( 'shop-sidebar' ); ?></aside>
	<?php endif; ?>
	<div class="shop-content">
		<?php woocommerce_content(); ?>
	</div>
</div>
<?php
get_footer();
