<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function lyrics_block_block_assets() { // phpcs:ignore
	wp_enqueue_style(
		'lyrics-block-style-css',
		plugins_url( 'dist/blocks.style.build.css', __FILE__ ),
		array( 'wp-editor' ),
		LYRICS_BLOCK_VERSION
	);
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'lyrics_block_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function lyrics_block_editor_assets() { // phpcs:ignore
	wp_enqueue_script(
		'lyrics-block-js',
		plugins_url( 'dist/blocks.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		LYRICS_BLOCK_VERSION,
		true
	);
	wp_enqueue_style(
		'lyrics-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		LYRICS_BLOCK_VERSION
	);
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'lyrics_block_editor_assets' );
