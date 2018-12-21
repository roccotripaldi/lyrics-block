/*
 * External dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks, InspectorControls, PlainText } = wp.editor;
const { PanelBody, TextControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;

class LyricBlockEditor extends Component {
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { artist, title, showTitle, externalLink } = attributes;
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <ToggleControl
                            label={ __( 'Show Title' ) }
                            checked={ showTitle }
                            onChange={ value => setAttributes( { showTitle: value } ) }
                        />
                    </PanelBody>
                    <PanelBody>
                        <TextControl
                            label={ __( 'Song Title' ) }
                            value={ title }
                            onChange={ value => setAttributes( { title: value } ) }
                        />
                    </PanelBody>
                    <PanelBody>
                        <TextControl
                            label={ __( 'Artist' ) }
                            value={ artist }
                            onChange={ value => setAttributes( { artist: value } ) }
                        />
                    </PanelBody>
                    <PanelBody>
                        <TextControl
                            label={ __( 'External Link' ) }
                            value={ externalLink }
                            onChange={ value => setAttributes( { externalLink: value } ) }
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={ className }>
                    { showTitle && (
                        <h2 className='lyrics-title'>
                            <PlainText
                                placeholder={ __( 'Song title...' ) }
                                value={ title }
                                onChange={ value => setAttributes( { title: value } ) }
                            />
                        </h2>
                    ) }
                    <p className='lyrics-artist'>
                        <PlainText
                            value={ artist }
                            onChange={ value => setAttributes( { artist: value } ) }
                            placeholder={ __( 'Artist…' ) }
                        />
                    </p>
                </div>
                <InnerBlocks
                    allowedBlocks={ [ 'rocco/song-segment' ] }
                    templateLock={ false }
                    template={ [
                        [
                            'rocco/song-segment',
                            {
                                content: 'Hello, Dolly<br />' +
                                'This is Louis, Dolly<br />' +
                                'It\'s so nice to have you back where you belong<br />' +
                                'You\'re lookin\' swell, Dolly<br />' +
                                'I can tell, Dolly<br />' +
                                'You\'re still glowin\'...you\'re still crowin\'<br />' +
                                'You\'re still goin\' strong<br />' +
                                'I feel the room swayin\'<br />' +
                                'While the band\'s playin\'<br />' +
                                'One of our old favourite songs from way back when<br />' +
                                'So take her wrap, fellas find her an empty lap, fellas<br />' +
                                'Dolly\'ll never go away again<br />',
                                showLabel: false
                            },
                        ],
                        [
                            'rocco/song-segment',
                            {
                                content: 'Hello, Dolly<br />' +
                                'Well, hello, Dolly<br />' +
                                'It\'s so nice to have you back where you belong<br />' +
                                'You\'re lookin\' swell, Dolly<br />' +
                                'I can tell, Dolly<br />' +
                                'You\'re still glowin\'...you\'re still crowin\'<br />' +
                                'You\'re still goin\' strong<br />' +
                                'I feel the room swayin\'<br />' +
                                'While the band keeps on playin\'<br />' +
                                'One of our old favourite songs from way back when<br />' +
                                'So...golly, gee, fellas<br />' +
                                'Have a little faith in me, fellas<br />' +
                                'Dolly\'ll never go away<br />' +
                                'I said she\'ll never go away<br />' +
                                'Dolly\'ll never go away again',
                                showLabel: false
                            },
                        ]
                    ] }
                />
                {
                    externalLink && (
                        <div className='lyrics-external-link'>
                            <a href={ externalLink} target='_blank'>{ externalLink }</a>
                        </div>
                    )
                }
            </Fragment>
        );
    }
}

export default LyricBlockEditor;
