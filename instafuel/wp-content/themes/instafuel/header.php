<?php
/**
 * Site header.
 *
 * @package InstaFuel
 */

defined( 'ABSPATH' ) || exit;
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="topbar">
	<?php esc_html_e( 'Free shipping on orders above ₹999 · 100% authentic products', 'instafuel' ); ?>
</div>

<header class="site-header">
	<div class="container header-inner">
		<button class="menu-toggle" aria-label="<?php esc_attr_e( 'Toggle menu', 'instafuel' ); ?>" aria-expanded="false">
			<?php echo instafuel_icon( 'menu' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		</button>

		<a class="site-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
			<?php if ( has_custom_logo() ) : ?>
				<?php the_custom_logo(); ?>
			<?php else : ?>
				Insta<span>Fuel</span>
			<?php endif; ?>
		</a>

		<form class="header-search" role="search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
			<input type="search" name="s" placeholder="<?php esc_attr_e( 'Search for supplements…', 'instafuel' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>">
			<?php if ( instafuel_has_woocommerce() ) : ?>
				<input type="hidden" name="post_type" value="product">
			<?php endif; ?>
			<button type="submit" aria-label="<?php esc_attr_e( 'Search', 'instafuel' ); ?>">
				<?php echo instafuel_icon( 'search' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</button>
		</form>

		<div class="header-actions">
			<?php if ( instafuel_has_woocommerce() ) : ?>
				<a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" aria-label="<?php esc_attr_e( 'My account', 'instafuel' ); ?>">
					<?php echo instafuel_icon( 'user' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				</a>
				<a class="header-cart" href="<?php echo esc_url( wc_get_cart_url() ); ?>" aria-label="<?php esc_attr_e( 'Cart', 'instafuel' ); ?>">
					<?php echo instafuel_icon( 'cart' ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					<span class="cart-count"><?php echo esc_html( WC()->cart ? WC()->cart->get_cart_contents_count() : 0 ); ?></span>
				</a>
			<?php endif; ?>
		</div>
	</div>

	<nav class="main-nav" aria-label="<?php esc_attr_e( 'Primary', 'instafuel' ); ?>">
		<div class="container">
			<?php
			if ( has_nav_menu( 'primary' ) ) {
				wp_nav_menu( array( 'theme_location' => 'primary', 'container' => false, 'menu_class' => 'menu' ) );
			} else {
				echo '<ul class="menu">';
				echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'instafuel' ) . '</a></li>';
				echo '<li><a href="' . esc_url( instafuel_shop_url() ) . '">' . esc_html__( 'Shop', 'instafuel' ) . '</a></li>';
				foreach ( array_slice( instafuel_concerns(), 0, 5 ) as $concern ) {
					echo '<li><a href="' . esc_url( instafuel_category_url( $concern['slug'] ) ) . '">' . esc_html( $concern['name'] ) . '</a></li>';
				}
				echo '</ul>';
			}
			?>
		</div>
	</nav>
</header>

<main id="content" class="site-main">
