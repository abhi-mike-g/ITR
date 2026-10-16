<?php
/**
 * Site footer.
 *
 * @package InstaFuel
 */

defined( 'ABSPATH' ) || exit;
?>
</main>

<section class="trust-bar">
	<div class="container trust-grid">
		<div><strong><?php esc_html_e( '100% Authentic', 'instafuel' ); ?></strong><span><?php esc_html_e( 'Sourced directly from brands', 'instafuel' ); ?></span></div>
		<div><strong><?php esc_html_e( 'Fast Delivery', 'instafuel' ); ?></strong><span><?php esc_html_e( 'Dispatched within 24 hours', 'instafuel' ); ?></span></div>
		<div><strong><?php esc_html_e( 'Secure Payments', 'instafuel' ); ?></strong><span><?php esc_html_e( 'UPI, cards & COD', 'instafuel' ); ?></span></div>
		<div><strong><?php esc_html_e( 'Easy Returns', 'instafuel' ); ?></strong><span><?php esc_html_e( '7-day return window', 'instafuel' ); ?></span></div>
	</div>
</section>

<footer class="site-footer">
	<div class="container footer-grid">
		<div>
			<a class="site-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">Insta<span>Fuel</span></a>
			<p><?php esc_html_e( 'Clean supplements for a healthier, more energetic you.', 'instafuel' ); ?></p>
		</div>
		<div>
			<h4><?php esc_html_e( 'Shop by concern', 'instafuel' ); ?></h4>
			<ul>
				<?php foreach ( array_slice( instafuel_concerns(), 0, 4 ) as $concern ) : ?>
					<li><a href="<?php echo esc_url( instafuel_category_url( $concern['slug'] ) ); ?>"><?php echo esc_html( $concern['name'] ); ?></a></li>
				<?php endforeach; ?>
			</ul>
		</div>
		<div>
			<h4><?php esc_html_e( 'Information', 'instafuel' ); ?></h4>
			<?php
			if ( has_nav_menu( 'footer' ) ) {
				wp_nav_menu( array( 'theme_location' => 'footer', 'container' => false ) );
			} else {
				echo '<ul><li>' . esc_html__( 'About Us', 'instafuel' ) . '</li><li>' . esc_html__( 'Contact', 'instafuel' ) . '</li><li>' . esc_html__( 'Privacy Policy', 'instafuel' ) . '</li><li>' . esc_html__( 'Refund Policy', 'instafuel' ) . '</li></ul>';
			}
			?>
		</div>
		<div>
			<h4><?php esc_html_e( 'Newsletter', 'instafuel' ); ?></h4>
			<p><?php esc_html_e( 'Wellness tips and exclusive offers, twice a month.', 'instafuel' ); ?></p>
			<form class="newsletter" onsubmit="event.preventDefault(); this.innerHTML = '<p>Thanks for subscribing!</p>';">
				<input type="email" required placeholder="<?php esc_attr_e( 'Your email', 'instafuel' ); ?>">
				<button type="submit"><?php esc_html_e( 'Join', 'instafuel' ); ?></button>
			</form>
		</div>
	</div>
	<div class="footer-bottom">© <?php echo esc_html( gmdate( 'Y' ) ); ?> InstaFuel Wellness. <?php esc_html_e( 'Rebuilt for academic demonstration.', 'instafuel' ); ?></div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
