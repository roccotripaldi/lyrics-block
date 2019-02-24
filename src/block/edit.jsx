/*
 * External dependencies
 */
const { Component } = wp.element;
const { InnerBlocks, InspectorControls, PlainText } = wp.editor;
const { PanelBody, TextControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;

class LyricBlockEditor extends Component {
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { artist, title, showTitle, externalLink } = attributes;
        return (
            <div className="rocco-lyrics">
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
                    allowedBlocks={ [ 'rocco/song-segment', 'core/paragraph', 'core/heading' ] }
                    templateLock={ false }
                    template={ [
                        [ 'rocco/song-segment' ],
                        [
                            'rocco/song-segment',
                            {
                                content: 'She didn\'t beg oh, not enough<br />' +
                                'She didn\'t stay when things got tough<br />' +
                                'It\'s so nice to have you back where you belong<br />' +
                                'I told a lie and she got mad<br />' +
                                'she wasn\'t there when things got bad.',
                                type: 'Bridge',
                                showHeading: true
                            },
                        ],
                        [
                            'rocco/song-segment',
                            {
                                content: 'I never ever saw the northern lights<br />' +
                                'I never really heard of cluster-flies<br />' +
                                'I never ever saw the stars so bright<br />' +
                                'In the farmhouse things will be all right.<br />',
                                type: 'Chorus',
                                repeats: 2,
                                showHeading: true
                            },
                        ],
                    ] }
                />
                {
                    externalLink && (
                        <div className='lyrics-external-link'>
                            <a href={ externalLink} target='_blank'>{ externalLink }</a>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default LyricBlockEditor;
