import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBlockIntro extends Struct.ComponentSchema {
  collectionName: 'components_content_block_intros';
  info: {
    description: 'Content block';
    displayName: 'blockIntro';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ContentDualMediaBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_dual_media_blocks';
  info: {
    description: 'Content block';
    displayName: 'dualMediaBlock';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.String;
    featured: Schema.Attribute.Boolean;
    featuredArticle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.JSON;
    preamble: Schema.Attribute.String;
    reversed: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    topArticles: Schema.Attribute.JSON;
  };
}

export interface ContentEditorial extends Struct.ComponentSchema {
  collectionName: 'components_content_editorials';
  info: {
    description: 'Rich content section with mixed media';
    displayName: 'editorial';
    icon: 'cube';
  };
  attributes: {
    body: Schema.Attribute.JSON;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    > &
      Schema.Attribute.DefaultTo<'Both'>;
  };
}

export interface ContentEditorialCta extends Struct.ComponentSchema {
  collectionName: 'components_content_editorial_ctas';
  info: {
    description: 'Content block';
    displayName: 'editorialCta';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    > &
      Schema.Attribute.DefaultTo<'both'>;
    style: Schema.Attribute.Enumeration<
      ['white', 'gray', 'signature', 'black']
    > &
      Schema.Attribute.DefaultTo<'signature'>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ContentEditorialImage extends Struct.ComponentSchema {
  collectionName: 'components_content_editorial_images';
  info: {
    description: 'Image block within editorial';
    displayName: 'editorialImage';
    icon: 'cube';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.JSON;
    linkTarget: Schema.Attribute.Boolean;
    linkTitle: Schema.Attribute.String;
    wide: Schema.Attribute.Boolean;
  };
}

export interface ContentEditorialImageKeepProportions
  extends Struct.ComponentSchema {
  collectionName: 'components_content_editorial_image_keep_proportionss';
  info: {
    description: 'Content block';
    displayName: 'editorialImageKeepProportions';
    icon: 'cube';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.JSON;
    linkTarget: Schema.Attribute.Boolean;
    linkTitle: Schema.Attribute.String;
    narrow: Schema.Attribute.Boolean;
  };
}

export interface ContentEditorialMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_content_editorial_markdowns';
  info: {
    description: 'Markdown-based editorial content';
    displayName: 'editorialMarkdown';
    icon: 'cube';
  };
  attributes: {
    markdown: Schema.Attribute.Blocks;
  };
}

export interface ContentEditorialQuote extends Struct.ComponentSchema {
  collectionName: 'components_content_editorial_quotes';
  info: {
    description: 'Quote block within editorial';
    displayName: 'editorialQuote';
    icon: 'cube';
  };
  attributes: {
    quote: Schema.Attribute.Text;
    quotee: Schema.Attribute.String;
  };
}

export interface ContentEditorialVideo extends Struct.ComponentSchema {
  collectionName: 'components_content_editorial_videos';
  info: {
    description: 'Content block';
    displayName: 'editorialVideo';
    icon: 'cube';
  };
  attributes: {
    video: Schema.Attribute.JSON;
  };
}

export interface ContentEditorialWithoutSpacing extends Struct.ComponentSchema {
  collectionName: 'components_content_editorial_without_spacings';
  info: {
    description: 'Content block';
    displayName: 'editorialWithoutSpacing';
    icon: 'cube';
  };
  attributes: {
    body: Schema.Attribute.JSON;
  };
}

export interface ContentEmbed extends Struct.ComponentSchema {
  collectionName: 'components_content_embeds';
  info: {
    description: 'Content block';
    displayName: 'embed';
    icon: 'cube';
  };
  attributes: {
    asset: Schema.Attribute.Media<'texts'>;
    height: Schema.Attribute.Enumeration<
      ['400', '500', '600', '700', '800', '900', '1000', '1100', '1200']
    > &
      Schema.Attribute.DefaultTo<'800'>;
    spacing: Schema.Attribute.Enumeration<
      ['none', 'onlyTop', 'onlyBottom', 'both']
    > &
      Schema.Attribute.DefaultTo<'both'>;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    width: Schema.Attribute.Enumeration<['fluid', 'wide', 'narrow']> &
      Schema.Attribute.DefaultTo<'wide'>;
  };
}

export interface ContentMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_content_markdowns';
  info: {
    description: 'Content block';
    displayName: 'markdown';
    icon: 'cube';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
  };
}

export interface ContentOverlayBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_overlay_blocks';
  info: {
    description: 'Content block';
    displayName: 'overlayBlock';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    contentAlignment: Schema.Attribute.Enumeration<
      ['alignLeft', 'alignCenter', 'alignRight']
    >;
    description: Schema.Attribute.Blocks;
    featured: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images'>;
    innerSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    overlayOpacity: Schema.Attribute.JSON;
    overlayStyle: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
    width: Schema.Attribute.Enumeration<['fluid', 'xxWide', 'xWide']>;
  };
}

export interface ContentPreamble extends Struct.ComponentSchema {
  collectionName: 'components_content_preambles';
  info: {
    description: 'Content block';
    displayName: 'preamble';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    contentAlignment: Schema.Attribute.Enumeration<
      ['alignLeft', 'alignCenter', 'alignRight']
    >;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    innerSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    noBottomPadding: Schema.Attribute.Boolean;
    noTopPadding: Schema.Attribute.Boolean;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    titleType: Schema.Attribute.Enumeration<['h1', 'h2', 'h3', 'h4']>;
  };
}

export interface ContentSection extends Struct.ComponentSchema {
  collectionName: 'components_content_sections';
  info: {
    description: 'Content block';
    displayName: 'Financial Report Section';
    icon: 'cube';
  };
  attributes: {
    features: Schema.Attribute.JSON;
    year: Schema.Attribute.String;
  };
}

export interface ContentTextAndImage extends Struct.ComponentSchema {
  collectionName: 'components_content_text_and_images';
  info: {
    description: 'Two-column text and image layout';
    displayName: 'textAndImage';
    icon: 'cube';
  };
  attributes: {
    buttonLink: Schema.Attribute.JSON;
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    buttonText: Schema.Attribute.String;
    featured: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images'>;
    imageKeepProportions: Schema.Attribute.Boolean;
    layout: Schema.Attribute.Enumeration<
      [
        'layout11',
        'layout1g1',
        'layout12',
        'layout1g2',
        'layout21',
        'layout2g1',
      ]
    > &
      Schema.Attribute.DefaultTo<'layout11'>;
    mediaBackground: Schema.Attribute.Enumeration<
      [
        'mediaBgWhite',
        'mediaBgGray',
        'mediaBgSignature',
        'mediaBgBlack',
        'mediaBgLitterbox',
      ]
    > &
      Schema.Attribute.DefaultTo<'mediaBgWhite'>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    > &
      Schema.Attribute.DefaultTo<'outerNone'>;
    reversed: Schema.Attribute.Boolean;
    secondButtonLink: Schema.Attribute.JSON;
    secondButtonText: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    typeformButtonStyle: Schema.Attribute.Enumeration<
      ['default', 'cta', 'inverted']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    typeformCopy: Schema.Attribute.String;
    typeformID: Schema.Attribute.String;
    typeformSize: Schema.Attribute.Enumeration<
      ['50', '60', '70', '80', '90', '100']
    > &
      Schema.Attribute.DefaultTo<'70'>;
  };
}

export interface ContentTextAndVideo extends Struct.ComponentSchema {
  collectionName: 'components_content_text_and_videos';
  info: {
    description: 'Two-column text and video layout';
    displayName: 'textAndVideo';
    icon: 'cube';
  };
  attributes: {
    assetVideo: Schema.Attribute.Media<'videos'>;
    buttonLink: Schema.Attribute.JSON;
    buttonText: Schema.Attribute.String;
    featured: Schema.Attribute.Boolean;
    layout: Schema.Attribute.Enumeration<
      [
        'layout11',
        'layout1g1',
        'layout12',
        'layout1g2',
        'layout21',
        'layout2g1',
      ]
    > &
      Schema.Attribute.DefaultTo<'layout11'>;
    mediaBackground: Schema.Attribute.Enumeration<
      [
        'mediaBgWhite',
        'mediaBgGray',
        'mediaBgSignature',
        'mediaBgBlack',
        'mediaBgLitterbox',
      ]
    > &
      Schema.Attribute.DefaultTo<'mediaBgWhite'>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    > &
      Schema.Attribute.DefaultTo<'outerNone'>;
    reversed: Schema.Attribute.Boolean;
    secondButtonLink: Schema.Attribute.JSON;
    secondButtonText: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    text: Schema.Attribute.Blocks;
    thumbnailImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String;
    typeformButtonStyle: Schema.Attribute.Enumeration<
      ['default', 'cta', 'inverted']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    typeformCopy: Schema.Attribute.String;
    typeformID: Schema.Attribute.String;
    typeformSize: Schema.Attribute.Enumeration<
      ['50', '60', '70', '80', '90', '100']
    > &
      Schema.Attribute.DefaultTo<'70'>;
    video: Schema.Attribute.JSON;
  };
}

export interface CtaCtaBlock extends Struct.ComponentSchema {
  collectionName: 'components_cta_cta_blocks';
  info: {
    description: 'Call-to-action block with title and buttons';
    displayName: 'ctaBlock';
    icon: 'cube';
  };
  attributes: {
    buttonLink: Schema.Attribute.JSON;
    buttonText: Schema.Attribute.String;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    secondButtonLink: Schema.Attribute.JSON;
    secondButtonText: Schema.Attribute.String;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    width: Schema.Attribute.Enumeration<['fluid', 'wide', 'narrow']> &
      Schema.Attribute.DefaultTo<'narrow'>;
  };
}

export interface CtaCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_cta_buttons';
  info: {
    description: 'Simple call-to-action button';
    displayName: 'ctaButton';
    icon: 'cube';
  };
  attributes: {
    buttonLink: Schema.Attribute.JSON;
    buttonText: Schema.Attribute.String;
  };
}

export interface CtaCtaForm extends Struct.ComponentSchema {
  collectionName: 'components_cta_cta_forms';
  info: {
    description: 'Form-based call-to-action';
    displayName: 'ctaForm';
    icon: 'cube';
  };
  attributes: {
    copy: Schema.Attribute.Blocks;
    divider: Schema.Attribute.Enumeration<
      ['none', 'swooshBlueTop', 'swooshBlueBottom', 'swooshBlueBoth']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    formUrl: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    > &
      Schema.Attribute.DefaultTo<'both'>;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface CtaCtaModal extends Struct.ComponentSchema {
  collectionName: 'components_cta_cta_modals';
  info: {
    description: 'Content block';
    displayName: 'CTA Iframe Modal';
    icon: 'cube';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    iframeUrl: Schema.Attribute.String;
    spacing: Schema.Attribute.Enumeration<
      ['none', 'onlyTop', 'onlyBottom', 'both']
    > &
      Schema.Attribute.DefaultTo<'none'>;
  };
}

export interface CtaGatedForm extends Struct.ComponentSchema {
  collectionName: 'components_cta_gated_forms';
  info: {
    description: 'Content block';
    displayName: 'gatedForm';
    icon: 'cube';
  };
  attributes: {
    block: Schema.Attribute.JSON;
    copy: Schema.Attribute.Blocks;
    divider: Schema.Attribute.Enumeration<
      ['none', 'swooshBlueTop', 'swooshBlueBottom', 'swooshBlueBoth']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    formUrl: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface CtaStartpageCta extends Struct.ComponentSchema {
  collectionName: 'components_cta_startpage_ctas';
  info: {
    description: 'Content block';
    displayName: 'startpageCta';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    image: Schema.Attribute.Media<'images'>;
    preamble: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DataAccordionBlock extends Struct.ComponentSchema {
  collectionName: 'components_data_accordion_blocks';
  info: {
    description: 'Content block';
    displayName: 'accordionBlock';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Blocks;
    innerSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    items: Schema.Attribute.Component<'data.accordion-item', true>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    preventExpandFirstItem: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
    width: Schema.Attribute.Enumeration<['fluid', 'xxWide', 'xWide']>;
  };
}

export interface DataAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_data_accordion_items';
  info: {
    description: 'Content block';
    displayName: 'accordionItem';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface DataComparisonTable extends Struct.ComponentSchema {
  collectionName: 'components_data_comparison_tables';
  info: {
    description: 'Content block';
    displayName: 'Comparison Table';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Blocks;
    header: Schema.Attribute.Component<'data.comparison-table-header', true>;
    highlightedColumn: Schema.Attribute.Enumeration<
      ['0', '1', '2', '3', '4', '5']
    > &
      Schema.Attribute.DefaultTo<'0'>;
    highlightedStyle: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    innerSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    rows: Schema.Attribute.JSON;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface DataComparisonTableHeader extends Struct.ComponentSchema {
  collectionName: 'components_data_comparison_table_headers';
  info: {
    description: 'Content block';
    displayName: 'Header';
    icon: 'cube';
  };
  attributes: {
    columns: Schema.Attribute.Component<
      'data.comparison-table-header-colum',
      true
    >;
  };
}

export interface DataComparisonTableHeaderColum extends Struct.ComponentSchema {
  collectionName: 'components_data_comparison_table_header_colums';
  info: {
    description: 'Content block';
    displayName: 'Column';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DataComparisonTableRow extends Struct.ComponentSchema {
  collectionName: 'components_data_comparison_table_rows';
  info: {
    description: 'Content block';
    displayName: 'Row';
    icon: 'cube';
  };
  attributes: {
    columns: Schema.Attribute.Component<
      'data.comparison-table-row-colum',
      true
    >;
    feature: Schema.Attribute.String;
  };
}

export interface DataComparisonTableRowColum extends Struct.ComponentSchema {
  collectionName: 'components_data_comparison_table_row_colums';
  info: {
    description: 'Content block';
    displayName: 'Column';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    showStatus: Schema.Attribute.Boolean;
    status: Schema.Attribute.Enumeration<['true', 'false', 'notApplicable']> &
      Schema.Attribute.DefaultTo<'notApplicable'>;
    title: Schema.Attribute.String;
  };
}

export interface DataComparisonTableRowFeature extends Struct.ComponentSchema {
  collectionName: 'components_data_comparison_table_row_features';
  info: {
    description: 'Content block';
    displayName: 'Feature';
    icon: 'cube';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface DataComparisonTableSection extends Struct.ComponentSchema {
  collectionName: 'components_data_comparison_table_sections';
  info: {
    description: 'Content block';
    displayName: 'Section';
    icon: 'cube';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface DataDatablock extends Struct.ComponentSchema {
  collectionName: 'components_data_datablocks';
  info: {
    description: 'Content block';
    displayName: 'Datablock';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    title: Schema.Attribute.String;
    widgets: Schema.Attribute.Enumeration<
      [
        'archive',
        'financialCalendar',
        'insidersTransactions',
        'investorGrid',
        'keyFiguresPerformanceMetrics',
        'keyFiguresSegments',
        'keyFiguresOverview',
        'keyFiguresQuarter',
        'sharegraph',
        'shareholders',
        'stockTable',
        'subscription',
      ]
    > &
      Schema.Attribute.DefaultTo<'sharesholders'>;
  };
}

export interface DataFinancialReportSection extends Struct.ComponentSchema {
  collectionName: 'components_data_financial_report_sections';
  info: {
    description: 'Content block';
    displayName: 'FinancialReportSection';
    icon: 'cube';
  };
  attributes: {
    features: Schema.Attribute.Component<'data.financial-reports-item', true>;
    year: Schema.Attribute.String;
  };
}

export interface DataFinancialReportsItem extends Struct.ComponentSchema {
  collectionName: 'components_data_financial_reports_items';
  info: {
    description: 'Content block';
    displayName: 'FinancialReportsItem';
    icon: 'cube';
  };
  attributes: {
    date: Schema.Attribute.DateTime;
    link: Schema.Attribute.JSON;
    presentation: Schema.Attribute.Media<'texts'>;
    quarter: Schema.Attribute.String;
    report: Schema.Attribute.Media<'texts'>;
    transcript: Schema.Attribute.Media<'texts'>;
    webcast: Schema.Attribute.JSON;
  };
}

export interface DataFinancialReportsTable extends Struct.ComponentSchema {
  collectionName: 'components_data_financial_reports_tables';
  info: {
    description: 'Content block';
    displayName: 'financialReportsTable';
    icon: 'cube';
  };
  attributes: {
    sections: Schema.Attribute.Component<'data.financial-report-section', true>;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    > &
      Schema.Attribute.DefaultTo<'both'>;
    title: Schema.Attribute.String;
  };
}

export interface DataMiscSection extends Struct.ComponentSchema {
  collectionName: 'components_data_misc_sections';
  info: {
    description: 'Content block';
    displayName: 'miscSection';
    icon: 'cube';
  };
  attributes: {
    features: Schema.Attribute.Component<'data.misc-table-item', true>;
    year: Schema.Attribute.String;
  };
}

export interface DataMiscTable extends Struct.ComponentSchema {
  collectionName: 'components_data_misc_tables';
  info: {
    description: 'Content block';
    displayName: 'miscTable';
    icon: 'cube';
  };
  attributes: {
    sections: Schema.Attribute.Component<'data.misc-section', true>;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    > &
      Schema.Attribute.DefaultTo<'both'>;
    title: Schema.Attribute.String;
  };
}

export interface DataMiscTableItem extends Struct.ComponentSchema {
  collectionName: 'components_data_misc_table_items';
  info: {
    description: 'Content block';
    displayName: 'MiscTableItem';
    icon: 'cube';
  };
  attributes: {
    document: Schema.Attribute.Component<'downloads.document', true>;
  };
}

export interface DataTechSpec extends Struct.ComponentSchema {
  collectionName: 'components_data_tech_specs';
  info: {
    description: 'Technical specifications table';
    displayName: 'Specification';
    icon: 'cube';
  };
  attributes: {
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    preamble: Schema.Attribute.Blocks;
    sections: Schema.Attribute.Component<'data.tech-spec-section', true>;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface DataTechSpecFootnote extends Struct.ComponentSchema {
  collectionName: 'components_data_tech_spec_footnotes';
  info: {
    description: 'Content block';
    displayName: 'techSpecFootnote';
    icon: 'cube';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface DataTechSpecItem extends Struct.ComponentSchema {
  collectionName: 'components_data_tech_spec_items';
  info: {
    description: 'Content block';
    displayName: 'Item';
    icon: 'cube';
  };
  attributes: {
    feature: Schema.Attribute.Blocks;
    specification: Schema.Attribute.Blocks;
  };
}

export interface DataTechSpecSection extends Struct.ComponentSchema {
  collectionName: 'components_data_tech_spec_sections';
  info: {
    description: 'Content block';
    displayName: 'Section';
    icon: 'cube';
  };
  attributes: {
    boldColumns: Schema.Attribute.JSON;
    featuresLeft: Schema.Attribute.Component<'data.tech-spec-item', true>;
    featuresRight: Schema.Attribute.Component<'data.tech-spec-item', true>;
    footnotes: Schema.Attribute.Component<'data.tech-spec-footnote', true>;
    tableData: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface DownloadsDocument extends Struct.ComponentSchema {
  collectionName: 'components_downloads_documents';
  info: {
    description: 'Content block';
    displayName: 'document';
    icon: 'cube';
  };
  attributes: {
    icon: Schema.Attribute.String;
    link: Schema.Attribute.JSON;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DownloadsDownloads extends Struct.ComponentSchema {
  collectionName: 'components_downloads_downloadss';
  info: {
    description: 'Downloadable resources section';
    displayName: 'downloads';
    icon: 'cube';
  };
  attributes: {
    list: Schema.Attribute.JSON;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface DownloadsDownloadsExpandableItem
  extends Struct.ComponentSchema {
  collectionName: 'components_downloads_downloads_expandable_items';
  info: {
    description: 'Content block';
    displayName: 'Item';
    icon: 'cube';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'downloads.downloads-link-item', true>;
    listTitle: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface DownloadsDownloadsExpandableItemList
  extends Struct.ComponentSchema {
  collectionName: 'components_downloads_downloads_expandable_item_lists';
  info: {
    description: 'Content block';
    displayName: 'List';
    icon: 'cube';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'downloads.downloads-expandable-item',
      true
    >;
  };
}

export interface DownloadsDownloadsGatedDownloadForm
  extends Struct.ComponentSchema {
  collectionName: 'components_downloads_downloads_gated_download_forms';
  info: {
    description: 'Content block';
    displayName: 'downloadsGatedDownloadForm';
    icon: 'cube';
  };
  attributes: {
    formUrl: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DownloadsDownloadsGatedDownloadItem
  extends Struct.ComponentSchema {
  collectionName: 'components_downloads_downloads_gated_download_items';
  info: {
    description: 'Content block';
    displayName: 'downloadsGatedDownloadItem';
    icon: 'cube';
  };
  attributes: {
    externalFileUrl: Schema.Attribute.String;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    form: Schema.Attribute.Component<'cta.cta-form', true>;
    icon: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DownloadsDownloadsLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_downloads_downloads_link_items';
  info: {
    description: 'Content block';
    displayName: 'downloadsLinkItem';
    icon: 'cube';
  };
  attributes: {
    icon: Schema.Attribute.String;
    link: Schema.Attribute.JSON;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DownloadsDownloadsLinkItemList extends Struct.ComponentSchema {
  collectionName: 'components_downloads_downloads_link_item_lists';
  info: {
    description: 'Content block';
    displayName: 'downloadsLinkItemList';
    icon: 'cube';
  };
  attributes: {
    items: Schema.Attribute.JSON;
  };
}

export interface DownloadsGatedDownloads extends Struct.ComponentSchema {
  collectionName: 'components_downloads_gated_downloadss';
  info: {
    description: 'Content block';
    displayName: 'gatedDownloads';
    icon: 'cube';
  };
  attributes: {
    list: Schema.Attribute.JSON;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DownloadsGatedDownloadsExpandableItem
  extends Struct.ComponentSchema {
  collectionName: 'components_downloads_gated_downloads_expandable_items';
  info: {
    description: 'Content block';
    displayName: 'gatedDownloadsExpandableItem';
    icon: 'cube';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<
      'downloads.downloads-gated-download-item',
      true
    >;
    listTitle: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface DownloadsGatedDownloadsExpandableItemList
  extends Struct.ComponentSchema {
  collectionName: 'components_downloads_gated_downloads_expandable_item_lists';
  info: {
    description: 'Content block';
    displayName: 'gatedDownloadsExpandableItemList';
    icon: 'cube';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'downloads.gated-downloads-expandable-item',
      true
    >;
  };
}

export interface DownloadsGatedDownloadsList extends Struct.ComponentSchema {
  collectionName: 'components_downloads_gated_downloads_lists';
  info: {
    description: 'Content block';
    displayName: 'gatedDownloadsList';
    icon: 'cube';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'downloads.downloads-gated-download-item',
      true
    >;
  };
}

export interface EventsAgendaItem extends Struct.ComponentSchema {
  collectionName: 'components_events_agenda_items';
  info: {
    description: 'Content block';
    displayName: 'agendaItem';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Text;
    time: Schema.Attribute.String;
  };
}

export interface EventsDetail extends Struct.ComponentSchema {
  collectionName: 'components_events_details';
  info: {
    description: 'Content block';
    displayName: 'detail';
    icon: 'cube';
  };
  attributes: {
    icon: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EventsEventCalendar extends Struct.ComponentSchema {
  collectionName: 'components_events_event_calendars';
  info: {
    description: 'Content block';
    displayName: 'eventCalendar';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    eventDisplay: Schema.Attribute.Enumeration<
      ['future_events', 'past_events']
    > &
      Schema.Attribute.DefaultTo<'future_events'>;
    eventTypes: Schema.Attribute.JSON;
    preamble: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FeaturesCustomerCases extends Struct.ComponentSchema {
  collectionName: 'components_features_customer_casess';
  info: {
    description: 'Customer case studies showcase';
    displayName: 'customerCases';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    cases: Schema.Attribute.Component<'features.customer-cases-item', true>;
    contentAlignment: Schema.Attribute.Enumeration<
      ['alignLeft', 'alignCenter', 'alignRight']
    >;
    description: Schema.Attribute.Blocks;
    innerSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface FeaturesCustomerCasesItem extends Struct.ComponentSchema {
  collectionName: 'components_features_customer_cases_items';
  info: {
    description: 'Content block';
    displayName: 'Case';
    icon: 'cube';
  };
  attributes: {
    button: Schema.Attribute.Component<'utilities.button', true>;
    contentVisibility: Schema.Attribute.Enumeration<
      ['option_1', 'option_2', 'option_3']
    > &
      Schema.Attribute.DefaultTo<'option_2'>;
    customer: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    logotype: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface FeaturesLogo extends Struct.ComponentSchema {
  collectionName: 'components_features_logos';
  info: {
    description: 'Content block';
    displayName: 'logo';
    icon: 'cube';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface FeaturesLogoList extends Struct.ComponentSchema {
  collectionName: 'components_features_logo_lists';
  info: {
    description: 'Content block';
    displayName: 'logoList';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    headingSize: Schema.Attribute.Enumeration<
      ['xxs', 'xs', 'small', 'medium', 'large']
    > &
      Schema.Attribute.DefaultTo<'medium'>;
    logoOpacity: Schema.Attribute.JSON;
    logos: Schema.Attribute.Component<'features.logo', true>;
    logoSize: Schema.Attribute.Enumeration<['small', 'medium', 'large']> &
      Schema.Attribute.DefaultTo<'medium'>;
    logoStyle: Schema.Attribute.Enumeration<
      ['default', 'grayscale', 'blackAndWhite']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    scrollOnDesktop: Schema.Attribute.Boolean;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    > &
      Schema.Attribute.DefaultTo<'both'>;
    title: Schema.Attribute.String;
    transparentLogoBackground: Schema.Attribute.Boolean;
  };
}

export interface FeaturesRelatedContent extends Struct.ComponentSchema {
  collectionName: 'components_features_related_contents';
  info: {
    description: 'Content block';
    displayName: 'relatedContent';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    contentLayout: Schema.Attribute.Enumeration<
      ['grid', 'gridCompact', 'gridSlim', 'masonry', 'slider']
    > &
      Schema.Attribute.DefaultTo<'grid'>;
    contentType: Schema.Attribute.JSON;
    description: Schema.Attribute.Blocks;
    innerSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    products: Schema.Attribute.JSON;
    solutions: Schema.Attribute.JSON;
    storiesCount: Schema.Attribute.JSON;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface FeaturesSegments extends Struct.ComponentSchema {
  collectionName: 'components_features_segmentss';
  info: {
    description: 'Content block';
    displayName: 'Segments';
    icon: 'cube';
  };
  attributes: {
    blocks: Schema.Attribute.JSON;
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    contentAlignment: Schema.Attribute.Enumeration<
      ['alignLeft', 'alignCenter', 'alignRight']
    >;
    description: Schema.Attribute.Blocks;
    innerSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    items: Schema.Attribute.Component<'features.segments-item', true>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface FeaturesSegmentsItem extends Struct.ComponentSchema {
  collectionName: 'components_features_segments_items';
  info: {
    description: 'Content block';
    displayName: 'Segment';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    list: Schema.Attribute.Component<'features.segmest-item-list-item', true>;
    opacity: Schema.Attribute.JSON;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface FeaturesSegmestItemListItem extends Struct.ComponentSchema {
  collectionName: 'components_features_segmest_item_list_items';
  info: {
    description: 'Content block';
    displayName: 'Feature';
    icon: 'cube';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface FeaturesShortFeatures extends Struct.ComponentSchema {
  collectionName: 'components_features_short_featuress';
  info: {
    description: 'Grid of feature highlights';
    displayName: 'shortFeatures';
    icon: 'cube';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    backgroundOpacity: Schema.Attribute.JSON;
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    columns: Schema.Attribute.Enumeration<
      ['two', 'three', 'four', 'five', 'six']
    > &
      Schema.Attribute.DefaultTo<'four'>;
    contentAlignment: Schema.Attribute.Enumeration<
      ['alignLeft', 'alignCenter', 'alignRight']
    > &
      Schema.Attribute.DefaultTo<'alignCenter'>;
    featureBoxed: Schema.Attribute.Boolean;
    features: Schema.Attribute.Component<
      'features.short-features-feature',
      true
    >;
    featureStyle: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    width: Schema.Attribute.Enumeration<['fluid', 'xxWide', 'xWide']>;
  };
}

export interface FeaturesShortFeaturesFeature extends Struct.ComponentSchema {
  collectionName: 'components_features_short_features_features';
  info: {
    description: 'Content block';
    displayName: 'shortFeaturesFeature';
    icon: 'cube';
  };
  attributes: {
    buttonLink: Schema.Attribute.JSON;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.String;
    iconColor: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    label: Schema.Attribute.String;
    labelPrefix: Schema.Attribute.String;
    labelSuffix: Schema.Attribute.String;
    showLabel: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
  };
}

export interface FeaturesStickyMediaScroll extends Struct.ComponentSchema {
  collectionName: 'components_features_sticky_media_scrolls';
  info: {
    description: 'Content block';
    displayName: 'stickyMediaScroll';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    extendMediaToEdge: Schema.Attribute.Boolean;
    innerSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    introContentAlignment: Schema.Attribute.Enumeration<
      ['alignLeft', 'alignCenter', 'alignRight']
    >;
    layout: Schema.Attribute.Enumeration<
      ['layout_1', 'layout_2', 'layout_3', 'layout_4']
    > &
      Schema.Attribute.DefaultTo<'layout_2'>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    steps: Schema.Attribute.Component<
      'features.sticky-media-scroll-step',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface FeaturesStickyMediaScrollStep extends Struct.ComponentSchema {
  collectionName: 'components_features_sticky_media_scroll_steps';
  info: {
    description: 'Content block';
    displayName: 'Step';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    label: Schema.Attribute.String;
    mediaFit: Schema.Attribute.Enumeration<['contain', 'cover', 'full']> &
      Schema.Attribute.DefaultTo<'contain'>;
    mediaVisibility: Schema.Attribute.Enumeration<['images', 'videos']> &
      Schema.Attribute.DefaultTo<'images'>;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos', true>;
  };
}

export interface FeaturesTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_features_testimonials';
  info: {
    description: 'Content block';
    displayName: 'testimonial';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    roleAndCompany: Schema.Attribute.String;
  };
}

export interface FeaturesTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_features_testimonialss';
  info: {
    description: 'Customer testimonials carousel';
    displayName: 'testimonials';
    icon: 'cube';
  };
  attributes: {
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    testimonials: Schema.Attribute.Component<'features.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface FindersArticleFinderPage extends Struct.ComponentSchema {
  collectionName: 'components_finders_article_finder_pages';
  info: {
    description: 'Page template';
    displayName: 'articleFinderPage';
    icon: 'file';
  };
  attributes: {
    activateSearchField: Schema.Attribute.Boolean;
    body: Schema.Attribute.JSON;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    featuredArticle: Schema.Attribute.String;
    hideBreadcrumbs: Schema.Attribute.Boolean;
    hideStickyMenu: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images'>;
    noHeroOverlay: Schema.Attribute.Boolean;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    title: Schema.Attribute.String;
  };
}

export interface FindersArticleFinderPageV2 extends Struct.ComponentSchema {
  collectionName: 'components_finders_article_finder_page_v2s';
  info: {
    description: 'Page template';
    displayName: 'articleFinderPageV2';
    icon: 'file';
  };
  attributes: {
    activateSearchField: Schema.Attribute.Boolean;
    body: Schema.Attribute.JSON;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    editorsPick: Schema.Attribute.String;
    featuredArticle: Schema.Attribute.String;
    hero: Schema.Attribute.Component<'heroes.hero-small', true>;
    hideStickyMenu: Schema.Attribute.Boolean;
    highlight: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    mostPopular: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    title: Schema.Attribute.String;
  };
}

export interface FindersEventFinderPage extends Struct.ComponentSchema {
  collectionName: 'components_finders_event_finder_pages';
  info: {
    description: 'Page template';
    displayName: 'eventFinderPage';
    icon: 'file';
  };
  attributes: {
    activateSearchField: Schema.Attribute.Boolean;
    body: Schema.Attribute.JSON;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    featuredEvent: Schema.Attribute.String;
    hero: Schema.Attribute.Component<'heroes.hero-small', true>;
    hideBreadcrumbs: Schema.Attribute.Boolean;
    hideStickyMenu: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images'>;
    noHeroOverlay: Schema.Attribute.Boolean;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    title: Schema.Attribute.String;
  };
}

export interface FindersFinancialReportFinderPage
  extends Struct.ComponentSchema {
  collectionName: 'components_finders_financial_report_finder_pages';
  info: {
    description: 'Page template';
    displayName: 'financialReportFinderPage';
    icon: 'file';
  };
  attributes: {
    activateSearchField: Schema.Attribute.Boolean;
    body: Schema.Attribute.JSON;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    hero: Schema.Attribute.JSON;
    hideBreadcrumbs: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    title: Schema.Attribute.String;
  };
}

export interface FindersInvestorEventFinderPage extends Struct.ComponentSchema {
  collectionName: 'components_finders_investor_event_finder_pages';
  info: {
    description: 'Page template';
    displayName: '(Removed)';
    icon: 'file';
  };
  attributes: {
    activateSearchField: Schema.Attribute.Boolean;
    body: Schema.Attribute.JSON;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    hero: Schema.Attribute.JSON;
    hideBreadcrumbs: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    title: Schema.Attribute.String;
  };
}

export interface FindersPressreleaseFinderPage extends Struct.ComponentSchema {
  collectionName: 'components_finders_pressrelease_finder_pages';
  info: {
    description: 'Page template';
    displayName: 'pressreleaseFinderPage';
    icon: 'file';
  };
  attributes: {
    activateSearchField: Schema.Attribute.Boolean;
    body: Schema.Attribute.JSON;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    hero: Schema.Attribute.JSON;
    hideBreadcrumbs: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    title: Schema.Attribute.String;
  };
}

export interface FindersProductFinderPage extends Struct.ComponentSchema {
  collectionName: 'components_finders_product_finder_pages';
  info: {
    description: 'Page template';
    displayName: 'productFinderPage';
    icon: 'file';
  };
  attributes: {
    activateSearchField: Schema.Attribute.Boolean;
    body: Schema.Attribute.JSON;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    hero: Schema.Attribute.JSON;
    hideBreadcrumbs: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    title: Schema.Attribute.String;
  };
}

export interface FindersResourceFinderPage extends Struct.ComponentSchema {
  collectionName: 'components_finders_resource_finder_pages';
  info: {
    description: 'Page template';
    displayName: 'resourceFinderPage';
    icon: 'file';
  };
  attributes: {
    activateSearchField: Schema.Attribute.Boolean;
    body: Schema.Attribute.JSON;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    featuredResource: Schema.Attribute.String;
    hero: Schema.Attribute.Component<'heroes.hero-small', true>;
    hideStickyMenu: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images'>;
    noHeroOverlay: Schema.Attribute.Boolean;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    title: Schema.Attribute.String;
  };
}

export interface GridsColumnGrid extends Struct.ComponentSchema {
  collectionName: 'components_grids_column_grids';
  info: {
    description: 'Content block';
    displayName: 'column grid';
    icon: 'cube';
  };
  attributes: {};
}

export interface GridsColumnGridImageItem extends Struct.ComponentSchema {
  collectionName: 'components_grids_column_grid_image_items';
  info: {
    description: 'Content block';
    displayName: 'Image';
    icon: 'cube';
  };
  attributes: {
    buttonLink: Schema.Attribute.JSON;
    buttonText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageKeepProportions: Schema.Attribute.Boolean;
    markdown: Schema.Attribute.Blocks;
    secondButtonLink: Schema.Attribute.JSON;
    secondButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GridsColumnGridTextItem extends Struct.ComponentSchema {
  collectionName: 'components_grids_column_grid_text_items';
  info: {
    description: 'Content block';
    displayName: 'columnGridTextItem';
    icon: 'cube';
  };
  attributes: {
    buttonLink: Schema.Attribute.JSON;
    buttonText: Schema.Attribute.String;
    markdown: Schema.Attribute.Blocks;
    secondButtonLink: Schema.Attribute.JSON;
    secondButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GridsColumnGridTextOnly extends Struct.ComponentSchema {
  collectionName: 'components_grids_column_grid_text_onlys';
  info: {
    description: 'Content block';
    displayName: 'columnGridTextOnly';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    centered: Schema.Attribute.Boolean;
    description: Schema.Attribute.Blocks;
    inverted: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<'grids.column-grid-text-item', true>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    > &
      Schema.Attribute.DefaultTo<'outerNone'>;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    > &
      Schema.Attribute.DefaultTo<'both'>;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
    twoColumns: Schema.Attribute.Boolean;
    width: Schema.Attribute.Enumeration<['fluid', 'wide']> &
      Schema.Attribute.DefaultTo<'fluid'>;
  };
}

export interface GridsColumnGridVideoItem extends Struct.ComponentSchema {
  collectionName: 'components_grids_column_grid_video_items';
  info: {
    description: 'Content block';
    displayName: 'Video';
    icon: 'cube';
  };
  attributes: {
    buttonLink: Schema.Attribute.JSON;
    buttonText: Schema.Attribute.String;
    markdown: Schema.Attribute.Blocks;
    secondButtonLink: Schema.Attribute.JSON;
    secondButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.JSON;
  };
}

export interface GridsContentGridSlider extends Struct.ComponentSchema {
  collectionName: 'components_grids_content_grid_sliders';
  info: {
    description: 'Content block';
    displayName: 'contentGridSlider';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    contentAlignment: Schema.Attribute.Enumeration<
      ['alignLeft', 'alignCenter', 'alignRight']
    >;
    description: Schema.Attribute.Blocks;
    items: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    verticalSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
  };
}

export interface GridsInteractiveGrid extends Struct.ComponentSchema {
  collectionName: 'components_grids_interactive_grids';
  info: {
    description: 'Content block';
    displayName: 'interactiveGrid';
    icon: 'cube';
  };
  attributes: {
    autoActivateFirstItem: Schema.Attribute.Boolean;
    blockStyle: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Blocks;
    gridDesktopColumnCount: Schema.Attribute.Integer;
    innerSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    items: Schema.Attribute.Component<'grids.interactive-grid-item', true>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface GridsInteractiveGridItem extends Struct.ComponentSchema {
  collectionName: 'components_grids_interactive_grid_items';
  info: {
    description: 'Content block';
    displayName: 'interactiveGridItem';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface GridsTabsGrid extends Struct.ComponentSchema {
  collectionName: 'components_grids_tabs_grids';
  info: {
    description: 'Content block';
    displayName: 'Tabs';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    tabs: Schema.Attribute.Component<'grids.tabs-grid-tab-item', true>;
    title: Schema.Attribute.String;
    width: Schema.Attribute.Enumeration<['fluid', 'xxWide', 'xWide']>;
  };
}

export interface GridsTabsGridBlockItem extends Struct.ComponentSchema {
  collectionName: 'components_grids_tabs_grid_block_items';
  info: {
    description: 'Content block';
    displayName: 'Block';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    cover: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    overlayOpacity: Schema.Attribute.JSON;
    overlayStyle: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
    visualType: Schema.Attribute.Enumeration<['image', 'video', 'icon']> &
      Schema.Attribute.DefaultTo<'image'>;
  };
}

export interface GridsTabsGridTabItem extends Struct.ComponentSchema {
  collectionName: 'components_grids_tabs_grid_tab_items';
  info: {
    description: 'Content block';
    displayName: 'Tab';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    gridDescription: Schema.Attribute.Blocks;
    items: Schema.Attribute.Component<'grids.tabs-grid-block-item', true>;
    layout: Schema.Attribute.Enumeration<
      ['layout_1', 'layout_2', 'layout_3', 'layout_4', 'layout_5']
    > &
      Schema.Attribute.DefaultTo<'layout_1'>;
    tabTitle: Schema.Attribute.String;
  };
}

export interface HeroesHero extends Struct.ComponentSchema {
  collectionName: 'components_heroes_heros';
  info: {
    description: 'Hero banner with background image and call-to-action';
    displayName: 'hero';
    icon: 'cube';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    copy: Schema.Attribute.Blocks;
    inverted: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    noOverlay: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface HeroesHeroSmall extends Struct.ComponentSchema {
  collectionName: 'components_heroes_hero_smalls';
  info: {
    description: 'Compact hero banner';
    displayName: 'heroSmall';
    icon: 'cube';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Blocks;
    inverted: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    noOverlay: Schema.Attribute.Boolean;
    overlayOpacity: Schema.Attribute.JSON;
    overlayStyle: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface HeroesHeroStartpage extends Struct.ComponentSchema {
  collectionName: 'components_heroes_hero_startpages';
  info: {
    description: 'Homepage hero with featured content';
    displayName: 'heroStartpage';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    divider: Schema.Attribute.Boolean;
    fallbackImage: Schema.Attribute.Media<'images'>;
    hideContentOnDesktop: Schema.Attribute.Boolean;
    hideContentOnMobile: Schema.Attribute.Boolean;
    inverted: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    mobileVideo: Schema.Attribute.Media<'videos'>;
    noOverlay: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface HeroesHeroVideo extends Struct.ComponentSchema {
  collectionName: 'components_heroes_hero_videos';
  info: {
    description: 'Hero banner with video background';
    displayName: 'heroVideo';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    copy: Schema.Attribute.Blocks;
    inverted: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    noOverlay: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
    videoThumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface HeroesHeroVideoSmall extends Struct.ComponentSchema {
  collectionName: 'components_heroes_hero_video_smalls';
  info: {
    description: 'Content block';
    displayName: 'heroVideoSmall';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    inverted: Schema.Attribute.Boolean;
    noOverlay: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
    videoThumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ListsPressReleasesList extends Struct.ComponentSchema {
  collectionName: 'components_lists_press_releases_lists';
  info: {
    description: 'Content block';
    displayName: 'pressReleasesList';
    icon: 'cube';
  };
  attributes: {};
}

export interface ListsPublicationCard extends Struct.ComponentSchema {
  collectionName: 'components_lists_publication_cards';
  info: {
    description: 'Content block';
    displayName: 'Publication';
    icon: 'cube';
  };
  attributes: {
    abstract: Schema.Attribute.Text;
    authors: Schema.Attribute.String;
    date: Schema.Attribute.DateTime;
    doi: Schema.Attribute.String;
    fieldOfResearchTags: Schema.Attribute.String;
    itemId: Schema.Attribute.String;
    productTags: Schema.Attribute.String;
    sourceTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ListsReportsList extends Struct.ComponentSchema {
  collectionName: 'components_lists_reports_lists';
  info: {
    description: 'Content block';
    displayName: 'reportsList';
    icon: 'cube';
  };
  attributes: {};
}

export interface ListsTag extends Struct.ComponentSchema {
  collectionName: 'components_lists_tags';
  info: {
    description: 'Content block';
    displayName: 'tag';
    icon: 'cube';
  };
  attributes: {
    link: Schema.Attribute.JSON;
    tag: Schema.Attribute.String;
  };
}

export interface ListsTagList extends Struct.ComponentSchema {
  collectionName: 'components_lists_tag_lists';
  info: {
    description: 'Content block';
    displayName: 'tagList';
    icon: 'cube';
  };
  attributes: {
    tags: Schema.Attribute.Component<'lists.tag', true>;
    title: Schema.Attribute.String;
  };
}

export interface MediaAssetVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_asset_videos';
  info: {
    description: 'Content block';
    displayName: 'assetVideo';
    icon: 'cube';
  };
  attributes: {
    assetVideo: Schema.Attribute.Media<'videos'>;
    autoplay: Schema.Attribute.Boolean;
    schemaDate: Schema.Attribute.DateTime;
    schemaDescription: Schema.Attribute.Text;
    schemaDuration: Schema.Attribute.Integer;
    schemaImage: Schema.Attribute.Media<'images'>;
    schemaTitle: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
    thumbnailOverlay: Schema.Attribute.Boolean;
  };
}

export interface MediaCarouselItemImage extends Struct.ComponentSchema {
  collectionName: 'components_media_carousel_item_images';
  info: {
    description: 'Content block';
    displayName: 'carouselItemImage';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    overlayStyle: Schema.Attribute.Enumeration<
      ['gradient', 'peanut', 'peanutInverted']
    > &
      Schema.Attribute.DefaultTo<'peanut'>;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface MediaCarouselItemVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_carousel_item_videos';
  info: {
    description: 'Content block';
    displayName: 'carouselItemVideo';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Text;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
    video: Schema.Attribute.JSON;
  };
}

export interface MediaHotspotItem extends Struct.ComponentSchema {
  collectionName: 'components_media_hotspot_items';
  info: {
    description: 'Content block';
    displayName: 'hotspotItem';
    icon: 'cube';
  };
  attributes: {
    coordinateX: Schema.Attribute.JSON;
    coordinateY: Schema.Attribute.JSON;
    description: Schema.Attribute.Blocks;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface MediaHotspots extends Struct.ComponentSchema {
  collectionName: 'components_media_hotspotss';
  info: {
    description: 'Content block';
    displayName: 'hotspots';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    innerSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    items: Schema.Attribute.Component<'media.hotspot-item', true>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface MediaImageCarousel extends Struct.ComponentSchema {
  collectionName: 'components_media_image_carousels';
  info: {
    description: 'Content block';
    displayName: 'imageCarousel';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    carouselWidth: Schema.Attribute.Enumeration<['fluid', 'xxWide', 'xWide']> &
      Schema.Attribute.DefaultTo<'xWide'>;
    description: Schema.Attribute.Blocks;
    effect: Schema.Attribute.Enumeration<['coverflow', 'slide']> &
      Schema.Attribute.DefaultTo<'slide'>;
    items: Schema.Attribute.Component<'media.carousel-item-image', true>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    overlayVisibility: Schema.Attribute.Boolean;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface MediaImageWrapper extends Struct.ComponentSchema {
  collectionName: 'components_media_image_wrappers';
  info: {
    description: 'Content block';
    displayName: 'Image Card';
    icon: 'cube';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    taggedMediaBank: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface MediaSlideItemImage extends Struct.ComponentSchema {
  collectionName: 'components_media_slide_item_images';
  info: {
    description: 'Content block';
    displayName: 'Image';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    inverted: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    overlay: Schema.Attribute.Enumeration<
      ['overlayNone', 'overlay01', 'overlay02', 'overlay03']
    > &
      Schema.Attribute.DefaultTo<'overlayNone'>;
    paginationTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleType: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    > &
      Schema.Attribute.DefaultTo<'h3'>;
  };
}

export interface MediaSlideItemVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_slide_item_videos';
  info: {
    description: 'Content block';
    displayName: 'Video';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Text;
    inverted: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    overlay: Schema.Attribute.Enumeration<
      ['overlayNone', 'overlay01', 'overlay02', 'overlay03']
    > &
      Schema.Attribute.DefaultTo<'overlayNone'>;
    paginationTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleType: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']
    > &
      Schema.Attribute.DefaultTo<'h3'>;
    video: Schema.Attribute.Media<'videos'>;
    videoThumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface MediaSlider extends Struct.ComponentSchema {
  collectionName: 'components_media_sliders';
  info: {
    description: 'Content block';
    displayName: 'slider';
    icon: 'cube';
  };
  attributes: {
    arrowNavigationVisibility: Schema.Attribute.Boolean;
    contentPosition: Schema.Attribute.Enumeration<['center', 'left']> &
      Schema.Attribute.DefaultTo<'left'>;
    paginationOptions: Schema.Attribute.Enumeration<
      ['pagination', 'paginationEllipsis', 'none']
    > &
      Schema.Attribute.DefaultTo<'pagination'>;
    slides: Schema.Attribute.JSON;
  };
}

export interface MediaStackCarousel extends Struct.ComponentSchema {
  collectionName: 'components_media_stack_carousels';
  info: {
    description: 'Content block';
    displayName: 'stackCarousel';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Blocks;
    layout: Schema.Attribute.Enumeration<['layout11', 'layout12', 'layout21']> &
      Schema.Attribute.DefaultTo<'layout11'>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    stackingItems: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface MediaStackingSliderItem extends Struct.ComponentSchema {
  collectionName: 'components_media_stacking_slider_items';
  info: {
    description: 'Content block';
    displayName: 'StackingSliderItem';
    icon: 'cube';
  };
  attributes: {
    overlayStyle: Schema.Attribute.Enumeration<
      ['gradient', 'peanut', 'peanutInverted']
    > &
      Schema.Attribute.DefaultTo<'peanut'>;
    style: Schema.Attribute.Enumeration<
      ['white', 'gray', 'signature', 'black', 'blue']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    textAndImage: Schema.Attribute.Component<'content.text-and-image', true>;
  };
}

export interface MediaTwentyThreeVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_twenty_three_videos';
  info: {
    description: 'Content block';
    displayName: 'twentyThreeVideo';
    icon: 'cube';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean;
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.String;
    schemaDate: Schema.Attribute.DateTime;
    schemaDescription: Schema.Attribute.Text;
    schemaDuration: Schema.Attribute.Integer;
    schemaImage: Schema.Attribute.Media<'images'>;
    schemaTitle: Schema.Attribute.String;
    startTime: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
    thumbnailOverlay: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MediaTwentyThreeVideoWithoutDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_media_twenty_three_video_without_descriptions';
  info: {
    description: 'Content block';
    displayName: 'twentyThreeVideoWithoutDescription';
    icon: 'cube';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean;
    disableReplay: Schema.Attribute.Boolean;
    duration: Schema.Attribute.String;
    schemaDate: Schema.Attribute.DateTime;
    schemaDescription: Schema.Attribute.Text;
    schemaDuration: Schema.Attribute.Integer;
    schemaImage: Schema.Attribute.Media<'images'>;
    schemaTitle: Schema.Attribute.String;
    startTime: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
    thumbnailOverlay: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
  };
}

export interface MediaVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_videos';
  info: {
    description: 'Content block';
    displayName: 'video';
    icon: 'cube';
  };
  attributes: {
    video: Schema.Attribute.JSON;
  };
}

export interface MediaVideoCarousel extends Struct.ComponentSchema {
  collectionName: 'components_media_video_carousels';
  info: {
    description: 'Content block';
    displayName: 'videoCarousel';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    carouselWidth: Schema.Attribute.Enumeration<['fluid', 'xxWide', 'xWide']> &
      Schema.Attribute.DefaultTo<'xWide'>;
    description: Schema.Attribute.Blocks;
    effect: Schema.Attribute.Enumeration<['coverflow', 'slide']> &
      Schema.Attribute.DefaultTo<'slide'>;
    items: Schema.Attribute.Component<'media.carousel-item-video', true>;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface MediaVideoPlayer extends Struct.ComponentSchema {
  collectionName: 'components_media_video_players';
  info: {
    description: 'Content block';
    displayName: 'videoPlayer';
    icon: 'cube';
  };
  attributes: {
    spacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    > &
      Schema.Attribute.DefaultTo<'both'>;
    video: Schema.Attribute.JSON;
  };
}

export interface MediaYoutubeVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_youtube_videos';
  info: {
    description: 'Content block';
    displayName: 'youtubeVideo';
    icon: 'cube';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean;
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.String;
    schemaDate: Schema.Attribute.DateTime;
    schemaDescription: Schema.Attribute.Text;
    schemaDuration: Schema.Attribute.Integer;
    schemaTitle: Schema.Attribute.String;
    startTime: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
    thumbnailOverlay: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MediaYoutubeVideoWithoutDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_media_youtube_video_without_descriptions';
  info: {
    description: 'Content block';
    displayName: 'youtubeVideoWithoutDescription';
    icon: 'cube';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean;
    duration: Schema.Attribute.String;
    schemaDate: Schema.Attribute.DateTime;
    schemaDescription: Schema.Attribute.Text;
    schemaDuration: Schema.Attribute.Integer;
    schemaTitle: Schema.Attribute.String;
    startTime: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
    thumbnailOverlay: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
  };
}

export interface NavigationFooter extends Struct.ComponentSchema {
  collectionName: 'components_navigation_footers';
  info: {
    description: 'Site footer with links and social';
    displayName: 'footer';
    icon: 'cube';
  };
  attributes: {
    contactPageLink: Schema.Attribute.JSON;
    linkListA: Schema.Attribute.Component<'navigation.link', true>;
    linkListATitle: Schema.Attribute.String;
    linkListB: Schema.Attribute.Component<'navigation.link', true>;
    linkListBTitle: Schema.Attribute.String;
    privacyPolicyLink: Schema.Attribute.JSON;
    privacyPolicyText: Schema.Attribute.String;
    searchPageLink: Schema.Attribute.JSON;
    socialMediaList: Schema.Attribute.JSON;
    socialMediaTitle: Schema.Attribute.String;
    termsOfUseLink: Schema.Attribute.JSON;
    termsOfUseText: Schema.Attribute.String;
  };
}

export interface NavigationFooterSocialMediaItem
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_footer_social_media_items';
  info: {
    description: 'Content block';
    displayName: 'Item';
    icon: 'cube';
  };
  attributes: {
    icon: Schema.Attribute.String;
    link: Schema.Attribute.JSON;
  };
}

export interface NavigationHeader extends Struct.ComponentSchema {
  collectionName: 'components_navigation_headers';
  info: {
    description: 'Site header with navigation';
    displayName: 'header';
    icon: 'cube';
  };
  attributes: {
    headerNavigation: Schema.Attribute.Component<
      'navigation.header-navigation-item',
      true
    >;
    searchPageLink: Schema.Attribute.JSON;
    tobiiGroup: Schema.Attribute.Boolean;
  };
}

export interface NavigationHeaderCta extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_ctas';
  info: {
    description: 'Content block';
    displayName: 'headerCTA';
    icon: 'cube';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.JSON;
    linkText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface NavigationHeaderNavItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_nav_items';
  info: {
    description: 'Content block';
    displayName: 'headerNavItem';
    icon: 'cube';
  };
  attributes: {
    subNavGridLayout: Schema.Attribute.Enumeration<['1', '2', '3', '4']> &
      Schema.Attribute.DefaultTo<'1'>;
    subNavGroups: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    titleLink: Schema.Attribute.JSON;
  };
}

export interface NavigationHeaderNavigation extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_navigations';
  info: {
    description: 'Page template';
    displayName: 'Header';
    icon: 'file';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'navigation.header-navigation-item',
      true
    >;
  };
}

export interface NavigationHeaderNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_navigation_items';
  info: {
    description: 'Content block';
    displayName: 'Item';
    icon: 'cube';
  };
  attributes: {
    link: Schema.Attribute.JSON;
    subNavigation: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface NavigationHeaderSubNavGroup extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_sub_nav_groups';
  info: {
    description: 'Content block';
    displayName: 'headerSubNavGroup';
    icon: 'cube';
  };
  attributes: {
    icon: Schema.Attribute.String;
    links: Schema.Attribute.Component<'navigation.link', true>;
    title: Schema.Attribute.String;
    titleLink: Schema.Attribute.JSON;
  };
}

export interface NavigationHeaderSubNavigationCta
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_sub_navigation_ctas';
  info: {
    description: 'Content block';
    displayName: 'CTA';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface NavigationHeaderSubNavigationDropdownCopy
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_sub_navigation_dropdown_copys';
  info: {
    description: 'Content block';
    displayName: 'Dropdown';
    icon: 'cube';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'navigation.header-sub-navigation-item',
      true
    >;
  };
}

export interface NavigationHeaderSubNavigationGroup
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_sub_navigation_groups';
  info: {
    description: 'Content block';
    displayName: 'Items';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'navigation.header-sub-navigation-item',
      true
    >;
    link: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface NavigationHeaderSubNavigationItem
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_sub_navigation_items';
  info: {
    description: 'Content block';
    displayName: 'Item';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface NavigationHeaderSubNavigationPanel
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_sub_navigation_panels';
  info: {
    description: 'Content block';
    displayName: 'Panel';
    icon: 'cube';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'navigation.header-sub-navigation-panel-item',
      true
    >;
  };
}

export interface NavigationHeaderSubNavigationPanelItem
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_sub_navigation_panel_items';
  info: {
    description: 'Content block';
    displayName: 'Panel';
    icon: 'cube';
  };
  attributes: {
    body: Schema.Attribute.Component<
      'navigation.header-sub-navigation-group',
      true
    >;
    cta: Schema.Attribute.Component<
      'navigation.header-sub-navigation-cta',
      true
    >;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.JSON;
    sidebar: Schema.Attribute.Component<
      'navigation.header-sub-navigation-sidebar',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface NavigationHeaderSubNavigationSidebar
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_sub_navigation_sidebars';
  info: {
    description: 'Content block';
    displayName: 'Items';
    icon: 'cube';
  };
  attributes: {
    icon: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'navigation.header-sub-navigation-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface NavigationHeaderSubNavigationTab
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_sub_navigation_tabs';
  info: {
    description: 'Content block';
    displayName: 'Tab';
    icon: 'cube';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'navigation.header-sub-navigation-tab-item',
      true
    >;
  };
}

export interface NavigationHeaderSubNavigationTabItem
  extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_sub_navigation_tab_items';
  info: {
    description: 'Content block';
    displayName: 'Tab item';
    icon: 'cube';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'navigation.header-sub-navigation-panel-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface NavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_links';
  info: {
    description: 'Content block';
    displayName: 'link';
    icon: 'cube';
  };
  attributes: {
    link: Schema.Attribute.JSON;
    text: Schema.Attribute.String;
  };
}

export interface PeopleAuthor extends Struct.ComponentSchema {
  collectionName: 'components_people_authors';
  info: {
    description: 'Page template';
    displayName: 'author';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Text;
    facebookLink: Schema.Attribute.JSON;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.JSON;
    linkedinLink: Schema.Attribute.JSON;
    name: Schema.Attribute.String;
    rolesAndCompany: Schema.Attribute.String;
    twitterLink: Schema.Attribute.JSON;
  };
}

export interface PeopleAuthorRole extends Struct.ComponentSchema {
  collectionName: 'components_people_author_roles';
  info: {
    description: 'Content block';
    displayName: 'authorRole';
    icon: 'cube';
  };
  attributes: {
    role: Schema.Attribute.String;
  };
}

export interface PeopleContact extends Struct.ComponentSchema {
  collectionName: 'components_people_contacts';
  info: {
    description: 'Page template';
    displayName: 'contact';
    icon: 'file';
  };
  attributes: {
    email: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PeopleContacts extends Struct.ComponentSchema {
  collectionName: 'components_people_contactss';
  info: {
    description: 'Content block';
    displayName: 'Contacts';
    icon: 'cube';
  };
  attributes: {};
}

export interface PeopleSpeaker extends Struct.ComponentSchema {
  collectionName: 'components_people_speakers';
  info: {
    description: 'Page template';
    displayName: 'speaker';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    linkedinLink: Schema.Attribute.JSON;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PeopleSpeakers extends Struct.ComponentSchema {
  collectionName: 'components_people_speakerss';
  info: {
    description: 'Content block';
    displayName: 'speakers';
    icon: 'cube';
  };
  attributes: {
    speakers: Schema.Attribute.Component<'people.speakers-speaker', true>;
    title: Schema.Attribute.String;
  };
}

export interface PeopleSpeakersSpeaker extends Struct.ComponentSchema {
  collectionName: 'components_people_speakers_speakers';
  info: {
    description: 'Content block';
    displayName: 'speakersSpeaker';
    icon: 'cube';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    linkedinLink: Schema.Attribute.JSON;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedBackground extends Struct.ComponentSchema {
  collectionName: 'components_shared_backgrounds';
  info: {
    description: 'Reusable background style configuration';
    displayName: 'Background';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    opacity: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<100>;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    > &
      Schema.Attribute.DefaultTo<'none'>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: 'Reusable button with link and style options';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false>;
    style: Schema.Attribute.Enumeration<
      ['default', 'primary', 'secondary', 'cta', 'inverted', 'outline']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    text: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: 'Reusable link with URL and target options';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    linkType: Schema.Attribute.Enumeration<['url', 'story', 'email', 'phone']> &
      Schema.Attribute.DefaultTo<'url'>;
    storyPath: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMediaWithCaption extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_with_captions';
  info: {
    description: 'Image or video with optional caption and alt text';
    displayName: 'Media With Caption';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.Text;
    fit: Schema.Attribute.Enumeration<
      ['contain', 'cover', 'full', 'original']
    > &
      Schema.Attribute.DefaultTo<'cover'>;
    image: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

export interface SharedPerson extends Struct.ComponentSchema {
  collectionName: 'components_shared_persons';
  info: {
    description: 'Reusable person profile (author, speaker, contact)';
    displayName: 'Person';
    icon: 'user';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    company: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    image: Schema.Attribute.Media<'images'>;
    linkedinUrl: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String;
    twitterUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for pages';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
    noFollow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSpacing extends Struct.ComponentSchema {
  collectionName: 'components_shared_spacings';
  info: {
    description: 'Reusable spacing and width configuration';
    displayName: 'Spacing';
    icon: 'layout';
  };
  attributes: {
    inner: Schema.Attribute.Enumeration<
      ['none', 'onlyTop', 'onlyBottom', 'both']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    outer: Schema.Attribute.Enumeration<
      ['outerNone', 'outerOnlyTop', 'outerOnlyBottom', 'outerBoth']
    > &
      Schema.Attribute.DefaultTo<'outerNone'>;
    width: Schema.Attribute.Enumeration<['fluid', 'wide', 'narrow', 'xWide']> &
      Schema.Attribute.DefaultTo<'wide'>;
  };
}

export interface UtilitiesArticleFooter extends Struct.ComponentSchema {
  collectionName: 'components_utilities_article_footers';
  info: {
    description: 'Content block';
    displayName: 'articleFooter';
    icon: 'cube';
  };
  attributes: {};
}

export interface UtilitiesButton extends Struct.ComponentSchema {
  collectionName: 'components_utilities_buttons';
  info: {
    description: 'Content block';
    displayName: 'button';
    icon: 'cube';
  };
  attributes: {
    buttonLink: Schema.Attribute.JSON;
    buttonText: Schema.Attribute.String;
    buttonType: Schema.Attribute.Enumeration<['default', 'inverted', 'cta']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface UtilitiesGlobalAlert extends Struct.ComponentSchema {
  collectionName: 'components_utilities_global_alerts';
  info: {
    description: 'Content block';
    displayName: 'globalAlert';
    icon: 'cube';
  };
  attributes: {
    button: Schema.Attribute.Component<'utilities.button', true>;
    expirationTime: Schema.Attribute.Integer;
    icon: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<
      ['white', 'red', 'black', 'signature']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UtilitiesGoogleMaps extends Struct.ComponentSchema {
  collectionName: 'components_utilities_google_mapss';
  info: {
    description: 'Content block';
    displayName: 'googleMaps';
    icon: 'cube';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'utilities.button', true>;
    description: Schema.Attribute.Blocks;
    headerAlignment: Schema.Attribute.Enumeration<
      ['alignLeft', 'alignCenter', 'alignRight']
    >;
    innerSpacing: Schema.Attribute.Enumeration<
      ['onlyTop', 'onlyBottom', 'both', 'none']
    >;
    locations: Schema.Attribute.Component<
      'utilities.google-maps-location',
      true
    >;
    outerSpacing: Schema.Attribute.Enumeration<
      ['outerOnlyTop', 'outerOnlyBottom', 'outerBoth', 'outerNone']
    >;
    style: Schema.Attribute.Enumeration<
      [
        'none',
        'white',
        'gray',
        'signature',
        'black',
        'blue',
        'frostBlue',
        'oceanBlue',
        'peach',
        'violet',
        'gradientRadialTopBlueSignature',
        'gradientRadialCenterBlueSignature',
        'gradientLinearBlueSignature',
      ]
    >;
    title: Schema.Attribute.String;
    width: Schema.Attribute.Enumeration<['fluid', 'xxWide', 'xWide']>;
  };
}

export interface UtilitiesGoogleMapsLocation extends Struct.ComponentSchema {
  collectionName: 'components_utilities_google_maps_locations';
  info: {
    description: 'Content block';
    displayName: 'Location';
    icon: 'cube';
  };
  attributes: {
    addressDetails: Schema.Attribute.Blocks;
    latitude: Schema.Attribute.String;
    longitude: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UtilitiesLocalAlert extends Struct.ComponentSchema {
  collectionName: 'components_utilities_local_alerts';
  info: {
    description: 'Content block';
    displayName: 'localAlert';
    icon: 'cube';
  };
  attributes: {
    button: Schema.Attribute.Component<'utilities.button', true>;
    icon: Schema.Attribute.String;
    padding: Schema.Attribute.Enumeration<
      ['topAndBottom', 'onlyTop', 'onlyBottom', 'none']
    > &
      Schema.Attribute.DefaultTo<'topAndBottom'>;
    style: Schema.Attribute.Enumeration<['white', 'red', 'black', 'signature']>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UtilitiesPageSectionDivider extends Struct.ComponentSchema {
  collectionName: 'components_utilities_page_section_dividers';
  info: {
    description: 'Content block';
    displayName: 'pageSectionDivider';
    icon: 'cube';
  };
  attributes: {
    itemId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UtilitiesProduct extends Struct.ComponentSchema {
  collectionName: 'components_utilities_products';
  info: {
    description: 'Page template';
    displayName: 'product';
    icon: 'file';
  };
  attributes: {};
}

export interface UtilitiesShareItem extends Struct.ComponentSchema {
  collectionName: 'components_utilities_share_items';
  info: {
    description: 'Content block';
    displayName: 'shareItem';
    icon: 'cube';
  };
  attributes: {
    icon: Schema.Attribute.String;
    link: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.block-intro': ContentBlockIntro;
      'content.dual-media-block': ContentDualMediaBlock;
      'content.editorial': ContentEditorial;
      'content.editorial-cta': ContentEditorialCta;
      'content.editorial-image': ContentEditorialImage;
      'content.editorial-image-keep-proportions': ContentEditorialImageKeepProportions;
      'content.editorial-markdown': ContentEditorialMarkdown;
      'content.editorial-quote': ContentEditorialQuote;
      'content.editorial-video': ContentEditorialVideo;
      'content.editorial-without-spacing': ContentEditorialWithoutSpacing;
      'content.embed': ContentEmbed;
      'content.markdown': ContentMarkdown;
      'content.overlay-block': ContentOverlayBlock;
      'content.preamble': ContentPreamble;
      'content.section': ContentSection;
      'content.text-and-image': ContentTextAndImage;
      'content.text-and-video': ContentTextAndVideo;
      'cta.cta-block': CtaCtaBlock;
      'cta.cta-button': CtaCtaButton;
      'cta.cta-form': CtaCtaForm;
      'cta.cta-modal': CtaCtaModal;
      'cta.gated-form': CtaGatedForm;
      'cta.startpage-cta': CtaStartpageCta;
      'data.accordion-block': DataAccordionBlock;
      'data.accordion-item': DataAccordionItem;
      'data.comparison-table': DataComparisonTable;
      'data.comparison-table-header': DataComparisonTableHeader;
      'data.comparison-table-header-colum': DataComparisonTableHeaderColum;
      'data.comparison-table-row': DataComparisonTableRow;
      'data.comparison-table-row-colum': DataComparisonTableRowColum;
      'data.comparison-table-row-feature': DataComparisonTableRowFeature;
      'data.comparison-table-section': DataComparisonTableSection;
      'data.datablock': DataDatablock;
      'data.financial-report-section': DataFinancialReportSection;
      'data.financial-reports-item': DataFinancialReportsItem;
      'data.financial-reports-table': DataFinancialReportsTable;
      'data.misc-section': DataMiscSection;
      'data.misc-table': DataMiscTable;
      'data.misc-table-item': DataMiscTableItem;
      'data.tech-spec': DataTechSpec;
      'data.tech-spec-footnote': DataTechSpecFootnote;
      'data.tech-spec-item': DataTechSpecItem;
      'data.tech-spec-section': DataTechSpecSection;
      'downloads.document': DownloadsDocument;
      'downloads.downloads': DownloadsDownloads;
      'downloads.downloads-expandable-item': DownloadsDownloadsExpandableItem;
      'downloads.downloads-expandable-item-list': DownloadsDownloadsExpandableItemList;
      'downloads.downloads-gated-download-form': DownloadsDownloadsGatedDownloadForm;
      'downloads.downloads-gated-download-item': DownloadsDownloadsGatedDownloadItem;
      'downloads.downloads-link-item': DownloadsDownloadsLinkItem;
      'downloads.downloads-link-item-list': DownloadsDownloadsLinkItemList;
      'downloads.gated-downloads': DownloadsGatedDownloads;
      'downloads.gated-downloads-expandable-item': DownloadsGatedDownloadsExpandableItem;
      'downloads.gated-downloads-expandable-item-list': DownloadsGatedDownloadsExpandableItemList;
      'downloads.gated-downloads-list': DownloadsGatedDownloadsList;
      'events.agenda-item': EventsAgendaItem;
      'events.detail': EventsDetail;
      'events.event-calendar': EventsEventCalendar;
      'features.customer-cases': FeaturesCustomerCases;
      'features.customer-cases-item': FeaturesCustomerCasesItem;
      'features.logo': FeaturesLogo;
      'features.logo-list': FeaturesLogoList;
      'features.related-content': FeaturesRelatedContent;
      'features.segments': FeaturesSegments;
      'features.segments-item': FeaturesSegmentsItem;
      'features.segmest-item-list-item': FeaturesSegmestItemListItem;
      'features.short-features': FeaturesShortFeatures;
      'features.short-features-feature': FeaturesShortFeaturesFeature;
      'features.sticky-media-scroll': FeaturesStickyMediaScroll;
      'features.sticky-media-scroll-step': FeaturesStickyMediaScrollStep;
      'features.testimonial': FeaturesTestimonial;
      'features.testimonials': FeaturesTestimonials;
      'finders.article-finder-page': FindersArticleFinderPage;
      'finders.article-finder-page-v2': FindersArticleFinderPageV2;
      'finders.event-finder-page': FindersEventFinderPage;
      'finders.financial-report-finder-page': FindersFinancialReportFinderPage;
      'finders.investor-event-finder-page': FindersInvestorEventFinderPage;
      'finders.pressrelease-finder-page': FindersPressreleaseFinderPage;
      'finders.product-finder-page': FindersProductFinderPage;
      'finders.resource-finder-page': FindersResourceFinderPage;
      'grids.column-grid': GridsColumnGrid;
      'grids.column-grid-image-item': GridsColumnGridImageItem;
      'grids.column-grid-text-item': GridsColumnGridTextItem;
      'grids.column-grid-text-only': GridsColumnGridTextOnly;
      'grids.column-grid-video-item': GridsColumnGridVideoItem;
      'grids.content-grid-slider': GridsContentGridSlider;
      'grids.interactive-grid': GridsInteractiveGrid;
      'grids.interactive-grid-item': GridsInteractiveGridItem;
      'grids.tabs-grid': GridsTabsGrid;
      'grids.tabs-grid-block-item': GridsTabsGridBlockItem;
      'grids.tabs-grid-tab-item': GridsTabsGridTabItem;
      'heroes.hero': HeroesHero;
      'heroes.hero-small': HeroesHeroSmall;
      'heroes.hero-startpage': HeroesHeroStartpage;
      'heroes.hero-video': HeroesHeroVideo;
      'heroes.hero-video-small': HeroesHeroVideoSmall;
      'lists.press-releases-list': ListsPressReleasesList;
      'lists.publication-card': ListsPublicationCard;
      'lists.reports-list': ListsReportsList;
      'lists.tag': ListsTag;
      'lists.tag-list': ListsTagList;
      'media.asset-video': MediaAssetVideo;
      'media.carousel-item-image': MediaCarouselItemImage;
      'media.carousel-item-video': MediaCarouselItemVideo;
      'media.hotspot-item': MediaHotspotItem;
      'media.hotspots': MediaHotspots;
      'media.image-carousel': MediaImageCarousel;
      'media.image-wrapper': MediaImageWrapper;
      'media.slide-item-image': MediaSlideItemImage;
      'media.slide-item-video': MediaSlideItemVideo;
      'media.slider': MediaSlider;
      'media.stack-carousel': MediaStackCarousel;
      'media.stacking-slider-item': MediaStackingSliderItem;
      'media.twenty-three-video': MediaTwentyThreeVideo;
      'media.twenty-three-video-without-description': MediaTwentyThreeVideoWithoutDescription;
      'media.video': MediaVideo;
      'media.video-carousel': MediaVideoCarousel;
      'media.video-player': MediaVideoPlayer;
      'media.youtube-video': MediaYoutubeVideo;
      'media.youtube-video-without-description': MediaYoutubeVideoWithoutDescription;
      'navigation.footer': NavigationFooter;
      'navigation.footer-social-media-item': NavigationFooterSocialMediaItem;
      'navigation.header': NavigationHeader;
      'navigation.header-cta': NavigationHeaderCta;
      'navigation.header-nav-item': NavigationHeaderNavItem;
      'navigation.header-navigation': NavigationHeaderNavigation;
      'navigation.header-navigation-item': NavigationHeaderNavigationItem;
      'navigation.header-sub-nav-group': NavigationHeaderSubNavGroup;
      'navigation.header-sub-navigation-cta': NavigationHeaderSubNavigationCta;
      'navigation.header-sub-navigation-dropdown-copy': NavigationHeaderSubNavigationDropdownCopy;
      'navigation.header-sub-navigation-group': NavigationHeaderSubNavigationGroup;
      'navigation.header-sub-navigation-item': NavigationHeaderSubNavigationItem;
      'navigation.header-sub-navigation-panel': NavigationHeaderSubNavigationPanel;
      'navigation.header-sub-navigation-panel-item': NavigationHeaderSubNavigationPanelItem;
      'navigation.header-sub-navigation-sidebar': NavigationHeaderSubNavigationSidebar;
      'navigation.header-sub-navigation-tab': NavigationHeaderSubNavigationTab;
      'navigation.header-sub-navigation-tab-item': NavigationHeaderSubNavigationTabItem;
      'navigation.link': NavigationLink;
      'people.author': PeopleAuthor;
      'people.author-role': PeopleAuthorRole;
      'people.contact': PeopleContact;
      'people.contacts': PeopleContacts;
      'people.speaker': PeopleSpeaker;
      'people.speakers': PeopleSpeakers;
      'people.speakers-speaker': PeopleSpeakersSpeaker;
      'shared.background': SharedBackground;
      'shared.button': SharedButton;
      'shared.link': SharedLink;
      'shared.media-with-caption': SharedMediaWithCaption;
      'shared.person': SharedPerson;
      'shared.seo': SharedSeo;
      'shared.spacing': SharedSpacing;
      'utilities.article-footer': UtilitiesArticleFooter;
      'utilities.button': UtilitiesButton;
      'utilities.global-alert': UtilitiesGlobalAlert;
      'utilities.google-maps': UtilitiesGoogleMaps;
      'utilities.google-maps-location': UtilitiesGoogleMapsLocation;
      'utilities.local-alert': UtilitiesLocalAlert;
      'utilities.page-section-divider': UtilitiesPageSectionDivider;
      'utilities.product': UtilitiesProduct;
      'utilities.share-item': UtilitiesShareItem;
    }
  }
}
