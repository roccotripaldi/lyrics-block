/**
 * BLOCK: lyrics
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

import LyricBlockEditor from './edit.jsx';
import LyricBlockSave from './save.jsx';
import SongSegmentEditor from './edit-song-segment.jsx';
import SongSegmentSave from './save-song-segment.jsx';

//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'rocco/lyrics', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Lyrics' ), // Block title.
	icon: 'playlist-audio', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'lyrics' ),
		__( 'song lyrics' ),
	],
    attributes: {
        title: {
            type: 'string',
            default: 'Franklin\'s Tower',
        },
        artist: {
            type: 'string',
            default: 'Robert Hunter',
        },
        externalLink: {
            type: 'string',
        },
        showTitle: {
            type: 'boolean',
            default: true
        }
    },
	edit: LyricBlockEditor,
	save: LyricBlockSave
} );

registerBlockType( 'rocco/song-segment', {
    title: __( 'Lyric section' ),
    icon: '',
    category: 'common',
    parent: [ 'rocco/lyrics' ],
    attributes: {
        content: {
            type: 'string',
            default: 'In another time\'s forgotten space<br />' +
            'Your eyes looked through your mother\'s face<br />' +
            'Wildflower seed on the sand and stone<br />' +
            'May the four winds blow you safely home'
        },
        type: {
            type: 'string',
            default: 'Verse'
        },
        repeats: {
            type: 'string',
            default: '1'
        },
        showHeading: {
            type: 'boolean',
            default: true
        }
    },
    edit: SongSegmentEditor,
    save: SongSegmentSave
} );
