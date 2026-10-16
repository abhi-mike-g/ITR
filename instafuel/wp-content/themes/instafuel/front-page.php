<?php
/**
 * Homepage template.
 *
 * @package InstaFuel
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>

<section class="hero" data-slider>
	<div class="hero-track">
		<?php foreach ( instafuel_hero_slides() as $i => $slide ) : ?>
			<div class="hero-slide<?php echo 0 === $i ? ' is-active' : ''; ?>" style="--slide-bg: <?php echo esc_attr( $slide['color'] ); ?>">
				<div class="container hero-inner">
					<div class="hero-copy">
						<span class="eyebrow"><?php echo esc_html( $slide['eyebrow'] ); ?></span>
						<h1><?php echo esc_html( $slide['title'] ); ?></h1>
						<p><?php echo esc_html( $slide['text'] ); ?></p>
						<a class="btn" href="<?php echo esc_url( instafuel_shop_url() ); ?>"><?php echo esc_html( $slide['cta'] ); ?></a>
					</div>
					<div class="hero-visual" aria-hidden="true"><span class="bottle"></span><span class="bottle small"></span></div>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
	<div class="hero-dots">
		<?php foreach ( instafuel_hero_slides() as $i => $slide ) : ?>
			<button class="<?php echo 0 === $i ? 'is-active' : ''; ?>" aria-label="<?php echo esc_attr( sprintf( __( 'Slide %d', 'instafuel' ), $i + 1 ) ); ?>"></button>
		<?php endforeach; ?>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2 class="section-title"><?php esc_html_e( 'Shop By Concern', 'instafuel' ); ?></h2>
		<div class="concern-grid">
			<?php foreach ( instafuel_concerns() as $concern ) : ?>
				<a class="concern-card" href="<?php echo esc_url( instafuel_category_url( $concern['slug'] ) ); ?>">
					<span class="concern-icon"><?php echo instafuel_icon( $concern['icon'] ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
					<span class="concern-name"><?php echo esc_html( $concern['name'] ); ?></span>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<h2 class="section-title"><?php esc_html_e( 'Shop By Category', 'instafuel' ); ?></h2>
		<div class="category-grid">
			<?php foreach ( instafuel_categories() as $cat ) : ?>
				<a class="category-card" href="<?php echo esc_url( instafuel_category_url( $cat['slug'] ) ); ?>" style="--card-bg: <?php echo esc_attr( $cat['color'] ); ?>">
					<span class="category-img" aria-hidden="true"><span class="bottle"></span></span>
					<span class="category-name"><?php echo esc_html( $cat['name'] ); ?></span>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2 class="section-title"><?php esc_html_e( 'Sale & Offers', 'instafuel' ); ?></h2>
		<div class="offer-grid">
			<?php foreach ( instafuel_offers() as $offer ) : ?>
				<a class="offer-card" href="<?php echo esc_url( instafuel_shop_url() ); ?>" style="--offer-bg: <?php echo esc_attr( $offer['color'] ); ?>">
					<h3><?php echo esc_html( $offer['title'] ); ?></h3>
					<p><?php echo esc_html( $offer['text'] ); ?></p>
					<span class="offer-link"><?php esc_html_e( 'Shop the offer', 'instafuel' ); ?> <?php echo instafuel_icon( 'arrow' ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<div class="section-head">
			<h2 class="section-title"><?php esc_html_e( 'Best Seller Products', 'instafuel' ); ?></h2>
			<div class="carousel-nav">
				<button data-carousel-prev aria-label="<?php esc_attr_e( 'Previous', 'instafuel' ); ?>">‹</button>
				<button data-carousel-next aria-label="<?php esc_attr_e( 'Next', 'instafuel' ); ?>">›</button>
			</div>
		</div>
		<div class="product-carousel" data-carousel>
			<?php
			$has_products = false;
			if ( instafuel_has_woocommerce() ) {
				$best_sellers = wc_get_products(
					array(
						'status'  => 'publish',
						'limit'   => 8,
						'orderby' => 'meta_value_num',
						'meta_key' => 'total_sales', // phpcs:ignore WordPress.DB.SlowDBQuery
						'order'   => 'DESC',
					)
				);
				foreach ( $best_sellers as $product ) {
					$has_products = true;
					get_template_part( 'template-parts/product-card', null, array( 'product' => $product ) );
				}
			}
			if ( ! $has_products ) {
				foreach ( instafuel_placeholder_products() as $placeholder ) {
					get_template_part( 'template-parts/product-card-placeholder', null, $placeholder );
				}
			}
			?>
		</div>
	</div>
</section>

<?php
get_footer();
