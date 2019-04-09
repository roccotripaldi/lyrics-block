<?php
/**
 * Plugin Name: Lyrics
 * Plugin URI: https://github.com/roccotripaldi/lyrics
 * Description: Add song lyrics to your WordPress posts. Lyrics is a Gutenberg plugin created via create-guten-block.
 * Author: roccotripaldi
 * Author URI: http://roccotripaldicom
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'init.php';
