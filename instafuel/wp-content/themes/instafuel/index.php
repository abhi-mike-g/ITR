<?php
/**
 * Fallback template for blog, archives and search.
 *
 * @package InstaFuel
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>
<div class="container page-wrap">
	<h1 class="page-title">
		<?php
		if ( is_search() ) {
			/* translators: %s: search query */
			printf( esc_html__( 'Results for “%s”', 'instafuel' ), esc_html( get_search_query() ) );
		} elseif ( is_archive() ) {
			the_archive_title();
		} else {
			esc_html_e( 'Wellness Blog', 'instafuel' );
		}
		?>
	</h1>

	<?php if ( have_posts() ) : ?>
		<div class="post-grid">
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<article <?php post_class( 'post-card' ); ?>>
					<?php if ( has_post_thumbnail() ) : ?>
						<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'medium_large' ); ?></a>
					<?php endif; ?>
					<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
					<p><?php echo esc_html( get_the_excerpt() ); ?></p>
				</article>
			<?php endwhile; ?>
		</div>
		<?php the_posts_pagination(); ?>
	<?php else : ?>
		<p><?php esc_html_e( 'Nothing found.', 'instafuel' ); ?></p>
	<?php endif; ?>
</div>
<?php
get_footer();
