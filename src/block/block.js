/**
 * BLOCK: lyrics
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

import LyricBlockEditor from './edit.jsx';
import LyricBlockSave from './save.jsx';

//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'rocco/lyrics', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Song Lyrics' ), // Block title.
	icon: 'playlist-audio', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'lyrics' ),
		__( 'song lyrics' ),
	],
    attributes: {
        title: {
            type: 'string',
            default: 'Hello Dolly',
        },
        artist: {
            type: 'string',
            default: 'Louis Armstrong',
        },
        holiday: {
            type: 'string',
            default: '',
        },
        isDuet: {
            type: 'boolean',
            default: false,
        },
        externalLink: {
            type: 'string',
			default: 'https://genius.com/Louis-armstrong-hello-dolly-lyrics'
        }
    },
	edit: LyricBlockEditor,
	save: LyricBlockSave
} );
