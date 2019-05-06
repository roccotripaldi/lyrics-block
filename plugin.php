<?php
/**
 * Plugin Name: Lyrics Block
 * Plugin URI: https://github.com/roccotripaldi/lyrics
 * Description: Add lyrics to your WordPress posts. Lyrics is a Gutenberg plugin created via create-guten-block.
 * Author: roccotripaldi
 * Author URI: http://roccotripaldi.com
 * Version: 1.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'LYRICS_BLOCK_VERSION', '1.0' );

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'init.php';
