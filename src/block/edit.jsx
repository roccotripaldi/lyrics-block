/*
 * External dependencies
 */
const { Component } = wp.element;
const { InnerBlocks, InspectorControls, PlainText } = wp.blockEditor;
const { ExternalLink, PanelBody, TextControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;

class LyricBlockEditor extends Component {
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { artist, title, showTitle, externalLink } = attributes;
        return(
            <div>
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
                            label={ __( 'Title' ) }
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
                                placeholder={ __( 'Title...' ) }
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
                    <InnerBlocks
                        allowedBlocks={ [ 'rocco/lyric-section', 'core/paragraph', 'core/heading' ] }
                        templateLock={ false }
                        template={ [
                            [ 'rocco/lyrics-section' ],
                            [
                                'rocco/lyrics-section',
                                {
                                    content: 'Roll away, the dew',
                                    type: 'Chorus',
                                    showHeading: true,
                                    repeats: '4'
                                },
                            ],
                        ] }
                    />
                    {
                        externalLink && (
                            <div className='lyrics-external-link'>
                                <ExternalLink href={ externalLink }>{ title }</ExternalLink>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default LyricBlockEditor;
