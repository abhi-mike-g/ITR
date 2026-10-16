<?php
/**
 * Generic page template (also renders WooCommerce cart, checkout and account pages).
 *
 * @package InstaFuel
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>
<div class="container page-wrap">
	<?php
	while ( have_posts() ) :
		the_post();
		?>
		<h1 class="page-title"><?php the_title(); ?></h1>
		<div class="entry-content"><?php the_content(); ?></div>
	<?php endwhile; ?>
</div>
<?php
get_footer();
