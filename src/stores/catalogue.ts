import { defineStore } from 'pinia'

export const useCatalogueStore = defineStore({
    id: 'catalogue',
    state: () => ({
        products: [
            {
                "sku": "businesscards",
                "title": "Business cards",
                "properties": [
                    {
                        "slug": "fold",
                        "title": "Fold",
                        "options": [
                            {
                                "slug": "no_fold",
                                "name": "No fold"
                            },
                            {
                                "slug": "single_4",
                                "name": "Single 4"
                            },
                            {
                                "slug": "singlehorizontal_4",
                                "name": "Single Horizontal Fold"
                            }
                        ],
                        "type": "radio"
                    },
                    {
                        "slug": "size",
                        "title": "Size",
                        "options": [
                            {
                                "slug": "bc",
                                "name": "Business card 85 x 55 mm (horizontal)",
                                "width": 85,
                                "height": 55
                            },
                            {
                                "slug": "bc_portrait",
                                "name": "55 x 85 mm (vertical)",
                                "width": 55,
                                "height": 85
                            },
                            {
                                "slug": "bc_plus",
                                "name": "90 x 50 mm (horizontal)",
                                "width": 90,
                                "height": 50
                            },
                            {
                                "slug": "bc_plus_portrait",
                                "name": "50 x 90 mm (vertical)",
                                "width": 50,
                                "height": 90
                            },
                            {
                                "slug": "custom",
                                "nullable": false,
                                "customSizes": {
                                    "minHeight": 40,
                                    "minWidth": 40,
                                    "maxHeight": 299,
                                    "maxWidth": 424
                                }
                            }
                        ]
                    },
                    {
                        "slug": "printtype",
                        "title": "Printtype",
                        "options": [
                            {
                                "slug": "10",
                                "name": "1/0 PMS"
                            },
                            {
                                "slug": "20",
                                "name": "2/0 PMS"
                            },
                            {
                                "slug": "30",
                                "name": "3/0 PMS"
                            },
                            {
                                "slug": "40",
                                "name": "4/0 Full colour"
                            },
                            {
                                "slug": "11",
                                "name": "1/1 PMS"
                            },
                            {
                                "slug": "22",
                                "name": "2/2 PMS"
                            },
                            {
                                "slug": "33",
                                "name": "3/3 PMS"
                            },
                            {
                                "slug": "44",
                                "name": "4/4 Full colour"
                            },
                            {
                                "slug": "50_full_color_plus_white",
                                "name": "5/0 Full colour + white"
                            },
                            {
                                "slug": "55_full_color_plus_white",
                                "name": "5/5 Full colour + white"
                            }
                        ]
                    },
                    {
                        "slug": "material",
                        "title": "Material",
                        "options": [
                            {
                                "slug": "300gr_gesatineerd_mc",
                                "name": "300 g/m² gloss"
                            },
                            {
                                "slug": "350gr_gesatineerd_mc",
                                "name": "350 g/m² gloss"
                            },
                            {
                                "slug": "400gr_gesatineerd_mc",
                                "name": "400 g/m² gloss"
                            },
                            {
                                "slug": "300gr_silk_mc",
                                "name": "300 g/m² silk"
                            },
                            {
                                "slug": "350gr_silk_mc",
                                "name": "350 g/m² silk "
                            },
                            {
                                "slug": "400gr_silk_mc",
                                "name": "400 g/m² silk"
                            },
                            {
                                "slug": "300gr_tintoretto_gesso",
                                "name": "300 g/m² Tintoretto Gesso"
                            },
                            {
                                "slug": "280gr_linnen",
                                "name": "280 g/m² Constellation Snow (linen)"
                            },
                            {
                                "slug": "300gr_metallic_pearl",
                                "name": "300 g/m² Sirio metallic pearl"
                            },
                            {
                                "slug": "350gr_metallic_white",
                                "name": "350 g/m² Sirio metallic white"
                            },
                            {
                                "slug": "300gr_metallic_silver",
                                "name": "300 g/m² Sirio metallic silver"
                            },
                            {
                                "slug": "300gr_metallic_gold",
                                "name": "300 g/m² Sirio metallic gold"
                            },
                            {
                                "slug": "290gr_sirio_color_nero",
                                "name": "290 g/m² Sirio Colour Nero"
                            },
                            {
                                "slug": "295gr_paperwise_earth_pact_natural",
                                "name": "295 g/m² Paperwise® Earth Pact Natural"
                            },
                            {
                                "slug": "300gr_synaps",
                                "name": "300 g/m² Synaps® (Rip-proof and water proof) "
                            },
                            {
                                "slug": "300gr_yupo_blue_ypi",
                                "name": "234 g/m² YUPOBlue® - rip-proof, waterproof"
                            },
                            {
                                "slug": "350gr_yupo_blue_ypi",
                                "name": "276 g/m² YUPOBlue® - rip-proof, waterproof"
                            },
                            {
                                "slug": "400gr_yupo",
                                "name": "319 g/m² YUPOBlue® - rip-proof, waterproof"
                            },
                            {
                                "slug": "300gr_recystar",
                                "name": "300 g/m² BalancePure®"
                            },
                            {
                                "slug": "300gr_biotop",
                                "name": "300 g/m² Bio Top 3® natural"
                            },
                            {
                                "slug": "300gr_recystar_nature",
                                "name": "300 g/m² RecyStar® Nature"
                            },
                            {
                                "slug": "290gr_kraft_muskat",
                                "name": "290gr kraft muskat"
                            },
                            {
                                "slug": "300gr_hvo",
                                "name": "300 g/m² uncoated (writable)"
                            },
                            {
                                "slug": "300gr_hvo_nk",
                                "name": "300 g/m² uncoated offset natural carton"
                            },
                            {
                                "slug": "350gr_hvo",
                                "name": "350 g/m² uncoated (writable)"
                            },
                            {
                                "slug": "350gr_hvo_nk",
                                "name": "350 g/m² uncoated offset natural carton"
                            },
                            {
                                "slug": "400gr_hvo_nk",
                                "name": "400 g/m² offset (writable) natural cardboard"
                            },
                            {
                                "slug": "300gr_sbs_symbol_card",
                                "name": "300 g/m² Symbol Card one-sided coated sulphate cardboard"
                            },
                            {
                                "slug": "300gr_sbs",
                                "name": "300 g/m² MultiCard® single sided sulphate board"
                            },
                            {
                                "slug": "350gr_sbs",
                                "name": "350 g/m² MultiCard® single sided sulphate board "
                            },
                            {
                                "slug": "350gr_sbd",
                                "name": "350 g/m² MultiCard® double sided sulphate board "
                            },
                            {
                                "slug": "400gr_sbd",
                                "name": "400 g/m² double-sided coated sulphate carton"
                            },
                            {
                                "slug": "300gr_cotton_max_white",
                                "name": "300 g/m² Gmund Cotton Max White"
                            },
                            {
                                "slug": "300gr_cotton_linen_cream",
                                "name": "300 g/m² Gmund Cotton Linen Cream"
                            },
                            {
                                "slug": "300gr_cotton_gentlemen_blue",
                                "name": "300 g/m² Gmund Cotton Gentlemen Blue"
                            },
                            {
                                "slug": "250gr_yupo",
                                "name": "200 g/m² YUPOBlue® - rip-proof, waterproof"
                            }
                        ]
                    },
                    {
                        "slug": "spot_finish",
                        "title": "Spot finish",
                        "options": [
                            {
                                "slug": "none",
                                "name": "None"
                            },
                            {
                                "slug": "foil_gold",
                                "name": "Gold foil"
                            },
                            {
                                "slug": "foil_silver",
                                "name": "Silver foil"
                            },
                            {
                                "slug": "foil_rose",
                                "name": "Rose gold foil"
                            },
                            {
                                "slug": "foil_copper",
                                "name": "Copper foil"
                            },
                            {
                                "slug": "foil_glitter",
                                "name": "Glitter foil"
                            },
                            {
                                "slug": "foil_rainbow",
                                "name": "Rainbow foil"
                            },
                            {
                                "slug": "partial_gloss",
                                "name": "Partial Gloss"
                            },
                            {
                                "slug": "embossed_partial_gloss_40",
                                "name": "Embossed partial gloss (40 μm)"
                            },
                            {
                                "slug": "embossed_partial_gloss_80",
                                "name": "Embossed partial gloss (80 μm)"
                            }
                        ]
                    },
                    {
                        "slug": "spot_finish_back",
                        "title": "Spot finish backside",
                        "options": [
                            {
                                "slug": "none",
                                "name": "none"
                            },
                            {
                                "slug": "foil_gold",
                                "name": "Foil gold"
                            },
                            {
                                "slug": "foil_silver",
                                "name": "Foil silver"
                            },
                            {
                                "slug": "foil_rose",
                                "name": "Foil rose"
                            },
                            {
                                "slug": "foil_copper",
                                "name": "Foil copper"
                            },
                            {
                                "slug": "foil_glitter",
                                "name": "Foil glitter"
                            },
                            {
                                "slug": "foil_rainbow",
                                "name": "Foil rainbow"
                            },
                            {
                                "slug": "partial_gloss",
                                "name": "Partial Gloss"
                            },
                            {
                                "slug": "embossed_partial_gloss_40",
                                "name": "Embossed partial gloss 40"
                            },
                            {
                                "slug": "embossed_partial_gloss_80",
                                "name": "Embossed partial gloss 80"
                            }
                        ]
                    },
                    {
                        "slug": "copies",
                        "title": "Copies",
                        "options": [
                            {
                                "slug": 25,
                                "name": "25",
                                "type": "digital"
                            },
                            {
                                "slug": 50,
                                "name": "50",
                                "type": "digital"
                            },
                            {
                                "slug": 100,
                                "name": "100",
                                "type": "digital"
                            },
                            {
                                "slug": 250,
                                "name": "250",
                                "type": "digital"
                            },
                            {
                                "slug": 500,
                                "name": "500",
                                "type": "digital"
                            },
                            {
                                "slug": 1000,
                                "name": "1000",
                                "type": "digital"
                            },
                            {
                                "slug": 25,
                                "name": "25",
                                "type": "inkjet"
                            },
                            {
                                "slug": 50,
                                "name": "50",
                                "type": "inkjet"
                            },
                            {
                                "slug": 100,
                                "name": "100",
                                "type": "inkjet"
                            },
                            {
                                "slug": 250,
                                "name": "250",
                                "type": "inkjet"
                            },
                            {
                                "slug": 500,
                                "name": "500",
                                "type": "inkjet"
                            },
                            {
                                "slug": 1000,
                                "name": "1000",
                                "type": "inkjet"
                            },
                            {
                                "slug": 10000,
                                "name": "10000",
                                "type": "offset"
                            },
                            {
                                "slug": 20000,
                                "name": "20000",
                                "type": "offset"
                            },
                            {
                                "slug": 30000,
                                "name": "30000",
                                "type": "offset"
                            },
                            {
                                "slug": 40000,
                                "name": "40000",
                                "type": "offset"
                            },
                            {
                                "slug": 50000,
                                "name": "50000",
                                "type": "offset"
                            }
                        ]
                    },
                    {
                        "slug": "clean_cut",
                        "title": "Clean cut",
                        "options": [
                            {
                                "slug": "yes",
                                "name": "Yes"
                            },
                            {
                                "slug": "no",
                                "name": "No"
                            }
                        ]
                    },
                    {
                        "slug": "rounded_corners",
                        "title": "Rounded corners",
                        "options": [
                            {
                                "slug": "none",
                                "name": "None"
                            },
                            {
                                "slug": "3,5_mm_radius",
                                "name": "3,5 mm radius"
                            },
                            {
                                "slug": "7_mm_radius",
                                "name": "7 mm radius"
                            }
                        ]
                    },
                    {
                        "slug": "drillholes",
                        "title": "Drillholes",
                        "options": [
                            {
                                "slug": "none",
                                "name": "None"
                            },
                            {
                                "slug": "one_drillhole_3mm",
                                "name": "one drillhole 3mm"
                            },
                            {
                                "slug": "two_drillholes_3mm",
                                "name": "two drillholes 3mm"
                            },
                            {
                                "slug": "one_drillhole_4mm",
                                "name": "One drillhole 4mm"
                            },
                            {
                                "slug": "two_drillholes_4mm",
                                "name": "two drillholes 4mm"
                            },
                            {
                                "slug": "one_drillhole_5mm",
                                "name": "One drillhole 5mm"
                            },
                            {
                                "slug": "two_drillholes_5mm",
                                "name": "two drillholes 5mm"
                            },
                            {
                                "slug": "one_drillhole",
                                "name": "One Drillhole (6 mm)"
                            },
                            {
                                "slug": "two_drillholes",
                                "name": "Two Drillholes (6 mm)"
                            }
                        ]
                    },
                    {
                        "slug": "variable_creasing_line",
                        "title": "Variable creasing line parallel",
                        "options": [
                            {
                                "slug": "none",
                                "name": "No creasing"
                            },
                            {
                                "slug": "1",
                                "name": "1"
                            },
                            {
                                "slug": "2",
                                "name": "2"
                            },
                            {
                                "slug": "3",
                                "name": "3"
                            },
                            {
                                "slug": "4",
                                "name": "4"
                            },
                            {
                                "slug": "5",
                                "name": "5"
                            }
                        ]
                    },
                    {
                        "slug": "die_cut",
                        "title": "Die cut",
                        "options": [
                            {
                                "slug": "yes",
                                "name": "Yes"
                            },
                            {
                                "slug": "no",
                                "name": "No"
                            }
                        ]
                    },
                    {
                        "slug": "perforation",
                        "title": "Perforation parallel",
                        "options": [
                            {
                                "slug": "none",
                                "name": "No perforation"
                            },
                            {
                                "slug": "1_perforation_line",
                                "name": "1 perforation line"
                            }
                        ]
                    },
                    {
                        "slug": "bundle",
                        "title": "Bundle",
                        "options": [
                            {
                                "slug": "bundle_per_50",
                                "name": "Bundle_per_50"
                            },
                            {
                                "slug": "bundle_per_100",
                                "name": "Bundle per 100"
                            }
                        ]
                    },
                    {
                        "slug": "businesscard_creasing",
                        "title": "Businesscard creasing",
                        "options": [
                            {
                                "slug": "yes",
                                "name": "yes"
                            },
                            {
                                "slug": "no",
                                "name": "no"
                            }
                        ]
                    },
                    {
                        "slug": "folded",
                        "title": "Folded",
                        "options": [
                            {
                                "slug": "no",
                                "name": "no"
                            },
                            {
                                "slug": "yes",
                                "name": "yes"
                            }
                        ]
                    },
                    {
                        "slug": "printingmethod",
                        "title": "Printingmethod",
                        "options": [
                            {
                                "slug": "digital",
                                "name": "HP Indigo digital"
                            },
                            {
                                "slug": "inkjet",
                                "name": "Inkjet"
                            },
                            {
                                "slug": "offset",
                                "name": "Offset"
                            }
                        ]
                    }
                ],
                "excludes": [
                    [
                        {
                            "options": [
                                "foil_glitter",
                                "foil_gold",
                                "foil_rainbow",
                                "foil_copper",
                                "foil_rose",
                                "foil_silver",
                                "partial_gloss",
                                "embossed_partial_gloss_40",
                                "embossed_partial_gloss_80"
                            ],
                            "property": "spot_finish"
                        },
                        {
                            "options": [
                                "350gr_hvo",
                                "300gr_hvo",
                                "540gr_two_layer_multiloft_kraft",
                                "480gr_two_layer_multiloft_ultra_white",
                                "540gr_two_layer_multiloft_black",
                                "480gr_two_layer_multiloft_white",
                                "810gr_three_layer_multiloft_kraft",
                                "810gr_three_layer_multiloft_black",
                                "750gr_three_layer_multiloft_white",
                                "750gr_three_layer_multiloft_ultra_white",
                                "350gr_hvo_nk",
                                "400gr_hvo_nk",
                                "300gr_recystar",
                                "300gr_recystar_nature",
                                "300gr_cotton_max_white",
                                "300gr_cotton_linen_cream",
                                "300gr_cotton_new_grey",
                                "300gr_cotton_gentlemen_blue",
                                "290gr_kraft_muskat",
                                "440gr_kraft_muskat",
                                "350gr_atelier",
                                "300gr_hvo_nk"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [],
                            "property": "spot_finish"
                        },
                        {
                            "options": [
                                "350gr_hvo",
                                "300gr_hvo",
                                "300gr_hvo_nk",
                                "350gr_hvo_nk",
                                "400gr_hvo_nk",
                                "350gr_atelier"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "foil_glitter",
                                "foil_gold",
                                "foil_rainbow",
                                "foil_copper",
                                "foil_rose",
                                "foil_silver",
                                "embossed_partial_gloss_40",
                                "embossed_partial_gloss_80"
                            ],
                            "property": "spot_finish"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "options": [
                                "300gr_recycled",
                                "300gr_metallic_white",
                                "300gr_metallic_pearl",
                                "300gr_metallic_silver",
                                "300gr_metallic_gold",
                                "280gr_kraft",
                                "381gr_kraft",
                                "300gr_yupo_blue_ypi",
                                "350gr_yupo_blue_ypi",
                                "250gr_sirio_materica_clay",
                                "290gr_sirio_color_pietra",
                                "290gr_sirio_color_nero",
                                "500gr_sbd",
                                "400gr_yupo",
                                "295gr_paperwise_earth_pact_natural",
                                "300gr_conqueror_vergé_(crème)_high_white",
                                "300gr_conqueror_vergé_diamond_white",
                                "200gr_yupo",
                                "300gr_recystar",
                                "300gr_recystar_nature",
                                "300gr_cotton_max_white",
                                "300gr_cotton_linen_cream",
                                "300gr_cotton_new_grey",
                                "300gr_cotton_gentlemen_blue",
                                "300gr_hvo_nk",
                                "350gr_hvo",
                                "400gr_hvo_nk",
                                "290gr_kraft_muskat",
                                "440gr_kraft_muskat",
                                "350gr_atelier",
                                "300gr_biotop",
                                "250gr_yupo",
                                "400gr_gesatineerd_mc",
                                "300gr_synaps",
                                "350gr_hvo_nk"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "group_foils",
                                "foil_gold",
                                "foil_glitter",
                                "foil_rainbow",
                                "foil_copper",
                                "foil_rose",
                                "foil_silver",
                                "group_partial_gloss",
                                "embossed_partial_gloss_40",
                                "embossed_partial_gloss_80",
                                "partial_gloss"
                            ],
                            "property": "spot_finish"
                        }
                    ],
                    [
                        {
                            "options": [
                                "250gr_tintoretto_gesso",
                                "280gr_constalations_snow_(linnen)",
                                "280gr_kraftpapier",
                                "300gr_ice_silver_metallic",
                                "300gr_kraftpapier",
                                "500gr_sbd",
                                "280gr_kraft",
                                "381gr_kraft",
                                "300gr_tintoretto_gesso",
                                "280gr_linnen",
                                "300gr_metallic_white",
                                "350gr_metallic_white",
                                "300gr_metallic_pearl",
                                "300gr_metallic_gold",
                                "300gr_yupo_blue_ypi",
                                "350gr_yupo_blue_ypi",
                                "350gr_sbs",
                                "760gr_pvc",
                                "350gr_silk_mc",
                                "300gr_metallic_silver",
                                "250gr_sirio_materica_clay",
                                "290gr_sirio_color_pietra",
                                "290gr_sirio_color_nero",
                                "400gr_yupo",
                                "295gr_paperwise_earth_pact_natural",
                                "300gr_silk_mc",
                                "200gr_yupo",
                                "300gr_sbs_symbol_card",
                                "300gr_cotton_gentlemen_blue",
                                "300gr_cotton_new_grey",
                                "300gr_cotton_linen_cream",
                                "300gr_cotton_max_white",
                                "540gr_two_layer_multiloft_kraft",
                                "480gr_two_layer_multiloft_ultra_white",
                                "480gr_two_layer_multiloft_white",
                                "540gr_two_layer_multiloft_black",
                                "810gr_three_layer_multiloft_kraft",
                                "810gr_three_layer_multiloft_black",
                                "750gr_three_layer_multiloft_white",
                                "750gr_three_layer_multiloft_ultra_white",
                                "350gr_sbs_invercote",
                                "400gr_hvo_nk",
                                "300gr_synaps",
                                "350gr_atelier",
                                "290gr_kraft_muskat",
                                "440gr_kraft_muskat",
                                "170gr_gesatineerd_mc",
                                "250gr_yupo",
                                "300gr_sbs_invercote",
                                "400gr_gesatineerd_mc",
                                "350gr_hvo_nk",
                                "350gr_hvo",
                                "300gr_biotop",
                                "300gr_recystar"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "options": [
                                "50_full_color_plus_white",
                                "55_full_color_plus_white"
                            ],
                            "property": "printtype"
                        },
                        {
                            "options": [
                                "300gr_gesatineerd_mc",
                                "350gr_gesatineerd_mc",
                                "300gr_silk_mc",
                                "400gr_gesatineerd_mc",
                                "350gr_silk_mc",
                                "400gr_silk_mc",
                                "300gr_recycled",
                                "300gr_biotop",
                                "300gr_sbs",
                                "350gr_sbd",
                                "500gr_sbd",
                                "300gr_tintoretto_gesso",
                                "280gr_linnen",
                                "300gr_metallic_white",
                                "350gr_metallic_white",
                                "300gr_metallic_pearl",
                                "300gr_yupo_blue_ypi",
                                "350gr_yupo_blue_ypi",
                                "400gr_sbd",
                                "400gr_yupo",
                                "300gr_conqueror_vergé_(crème)_high_white",
                                "300gr_conqueror_vergé_diamond_white",
                                "300gr_hvo_nk",
                                "350gr_hvo_nk",
                                "200gr_yupo",
                                "300gr_recystar",
                                "300gr_recystar_nature",
                                "300gr_sbs_symbol_card",
                                "350gr_sbs",
                                "400gr_hvo_nk",
                                "250gr_yupo",
                                "300gr_synaps",
                                "300gr_hvo",
                                "350gr_hvo",
                                "300gr_cotton_max_white",
                                "300gr_cotton_linen_cream",
                                "300gr_cotton_gentlemen_blue"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "50_full_color_plus_white",
                                "55_full_color_plus_white"
                            ],
                            "property": "printtype"
                        }
                    ],
                    [
                        {
                            "options": [
                                "290gr_sirio_color_nero",
                                "540gr_two_layer_multiloft_black",
                                "810gr_three_layer_multiloft_black"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "44",
                                "40"
                            ],
                            "property": "printtype"
                        }
                    ],
                    [
                        {
                            "options": [
                                "10",
                                "20",
                                "30",
                                "11",
                                "22",
                                "33"
                            ],
                            "property": "printtype"
                        },
                        {
                            "options": [
                                "300gr_silk_mc",
                                "350gr_silk_mc",
                                "300gr_sbs_symbol_card",
                                "400gr_gesatineerd_mc",
                                "400gr_silk_mc",
                                "300gr_tintoretto_gesso",
                                "280gr_linnen",
                                "280gr_kraft",
                                "540gr_two_layer_multiloft_kraft",
                                "810gr_three_layer_multiloft_kraft",
                                "300gr_metallic_white",
                                "300gr_metallic_pearl",
                                "350gr_metallic_white",
                                "300gr_metallic_silver",
                                "300gr_metallic_gold",
                                "200gr_yupo",
                                "300gr_yupo_blue_ypi",
                                "290gr_sirio_color_pietra",
                                "250gr_sirio_materica_clay",
                                "290gr_sirio_color_nero",
                                "295gr_paperwise_earth_pact_natural",
                                "400gr_yupo",
                                "300gr_synaps",
                                "350gr_sbs_invercote",
                                "300gr_cotton_max_white",
                                "300gr_cotton_linen_cream",
                                "300gr_cotton_new_grey",
                                "300gr_cotton_gentlemen_blue",
                                "480gr_two_layer_multiloft_ultra_white",
                                "480gr_two_layer_multiloft_white",
                                "540gr_two_layer_multiloft_black",
                                "750gr_three_layer_multiloft_ultra_white",
                                "750gr_three_layer_multiloft_white",
                                "810gr_three_layer_multiloft_black",
                                "500gr_sbd",
                                "290gr_kraft_muskat",
                                "440gr_kraft_muskat",
                                "350gr_atelier",
                                "250gr_yupo"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "partial_gloss"
                            ],
                            "property": "spot_finish"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        }
                    ]
                ]
            },
            {
                "sku": "flyers",
                "title": "Flyers",
                "properties": [
                    {
                        "slug": "size",
                        "title": "Size",
                        "options": [
                            {
                                "slug": "a2",
                                "name": "A2 - 420 x 594 mm"
                            },
                            {
                                "slug": "a3",
                                "name": "A3 - 297 x 420 mm"
                            },
                            {
                                "slug": "a3_landscape",
                                "name": "A3 horizontal - 420 x 297 mm"
                            },
                            {
                                "slug": "a4",
                                "name": "A4 - 210 x 297 mm"
                            },
                            {
                                "slug": "a4_landscape",
                                "name": "A4 landscape - 297 x 210 mm"
                            },
                            {
                                "slug": "a5",
                                "name": "A5 - 148 x 210 mm"
                            },
                            {
                                "slug": "a5_landscape",
                                "name": "A5 landscape - 210 x 148 mm"
                            },
                            {
                                "slug": "a6",
                                "name": "A6 - 105 x 148 mm"
                            },
                            {
                                "slug": "a6_landscape",
                                "name": "A6 landscape - 148 x 105 mm"
                            },
                            {
                                "slug": "a7",
                                "name": "A7 - 74 x 105 mm"
                            },
                            {
                                "slug": "a7_landscape",
                                "name": "A7 landscape - 105 x 74 mm"
                            },
                            {
                                "slug": "a4_large",
                                "name": "A4 large - 148 x 420 mm"
                            },
                            {
                                "slug": "a5_large",
                                "name": "A5 large - 105 x 297 mm"
                            },
                            {
                                "slug": "a5_large_landscape",
                                "name": "A5 large landscape - 297 x 105 mm"
                            },
                            {
                                "slug": "a6_large",
                                "name": "A6 large - 74 x 210 mm"
                            },
                            {
                                "slug": "a6_large_landscape",
                                "name": "A6 large landscape - 210 x 74 mm"
                            },
                            {
                                "slug": "a7_large",
                                "name": "A7 large - 52 x 148 mm"
                            },
                            {
                                "slug": "a7_large_landscape",
                                "name": "A7 large landscape - 148 x 52 mm"
                            },
                            {
                                "slug": "a3_vierkant",
                                "name": "XL Square - 297 x 297 mm"
                            },
                            {
                                "slug": "carre_l",
                                "name": "Large square - 210 x 210 mm"
                            },
                            {
                                "slug": "carre_m",
                                "name": "Medium square - 148 x 148 mm"
                            },
                            {
                                "slug": "carre_card",
                                "name": "Square card - 135 x 135 mm "
                            },
                            {
                                "slug": "carre_s",
                                "name": "Small square - 105 x 105 mm"
                            },
                            {
                                "slug": "carre_xs",
                                "name": "XS square - 98 x 98 mm"
                            },
                            {
                                "slug": "card_medium",
                                "name": "Card medium - 120 x 170 mm "
                            },
                            {
                                "slug": "card_small",
                                "name": "Card small - 80 x 130 mm"
                            },
                            {
                                "slug": "ringband",
                                "name": "Ring band - 51 x 298 mm"
                            },
                            {
                                "slug": "ringband_small",
                                "name": "Ring band S - 61 x 192 mm"
                            },
                            {
                                "slug": "ringband_xsmall",
                                "name": "Ring band XS - 38 x 192 mm"
                            },
                            {
                                "slug": "1/3_a3",
                                "name": "1/3 A3 - 140 x 297 mm"
                            },
                            {
                                "slug": "1/3_a4",
                                "name": "1/3 A4 -  99 x 210 mm (DL)"
                            },
                            {
                                "slug": "1/3_a5",
                                "name": "1/3 A5 - 70 x 148 mm"
                            },
                            {
                                "slug": "din_large",
                                "name": "DL large - 98 x 210 mm"
                            },
                            {
                                "slug": "din_large_landscape",
                                "name": "DL large landscape - 210 x 98 mm"
                            },
                            {
                                "slug": "din_large_plus",
                                "name": "DL large+ - 99 x 210 mm"
                            },
                            {
                                "slug": "din_large_plus_landscape",
                                "name": "DL large+ landscape - 210 x 99 mm"
                            },
                            {
                                "slug": "us_large",
                                "name": "US Large - 105 x 210 mm"
                            },
                            {
                                "slug": "us_large_landscape",
                                "name": "US large landscape - 210 x 105 mm"
                            },
                            {
                                "slug": "custom",
                                "nullable": false,
                                "customSizes": {
                                    "minHeight": 70,
                                    "minWidth": 60,
                                    "maxHeight": 700,
                                    "maxWidth": 930
                                }
                            }
                        ]
                    },
                    {
                        "slug": "printtype",
                        "title": "Print type",
                        "options": [
                            {
                                "slug": "40",
                                "name": "4/0 Full colour"
                            },
                            {
                                "slug": "44",
                                "name": "4/4 Full colour"
                            },
                            {
                                "slug": "50_full_color_plus_white",
                                "name": "5/0 Full colour + white"
                            },
                            {
                                "slug": "55_full_color_plus_white",
                                "name": "5/5 Full colour + white"
                            }
                        ]
                    },
                    {
                        "slug": "material",
                        "title": "Material",
                        "options": [
                            {
                                "slug": "90gr_hv_bankpost",
                                "name": "90 g/m² uncoated premium white (writable)"
                            },
                            {
                                "slug": "100gr_hv_bankpost",
                                "name": "100 g/m² uncoated premium white (writable)"
                            },
                            {
                                "slug": "115gr_gesatineerd_mc",
                                "name": "115 g/m² gloss"
                            },
                            {
                                "slug": "135gr_gesatineerd_mc",
                                "name": "135 g/m² gloss"
                            },
                            {
                                "slug": "170gr_gesatineerd_mc",
                                "name": "170 g/m² gloss"
                            },
                            {
                                "slug": "250gr_gesatineerd_mc",
                                "name": "250 g/m² gloss"
                            },
                            {
                                "slug": "300gr_gesatineerd_mc",
                                "name": "300 g/m² gloss"
                            },
                            {
                                "slug": "350gr_gesatineerd_mc",
                                "name": "350 g/m² gloss"
                            },
                            {
                                "slug": "400gr_gesatineerd_mc",
                                "name": "400 g/m² gloss"
                            },
                            {
                                "slug": "115gr_silk_mc",
                                "name": "115 g/m² silk"
                            },
                            {
                                "slug": "135gr_silk_mc",
                                "name": "135 g/m² silk "
                            },
                            {
                                "slug": "170gr_silk_mc",
                                "name": "170 g/m² silk"
                            },
                            {
                                "slug": "250gr_silk_mc",
                                "name": "250 g/m² silk"
                            },
                            {
                                "slug": "300gr_silk_mc",
                                "name": "300 g/m² silk"
                            },
                            {
                                "slug": "350gr_silk_mc",
                                "name": "350 g/m² silk "
                            },
                            {
                                "slug": "400gr_silk_mc",
                                "name": "400 g/m² silk"
                            },
                            {
                                "slug": "90gr_recystar_nature",
                                "name": "90 g/m² RecyStar® Nature"
                            },
                            {
                                "slug": "120gr_recystar_nature",
                                "name": "115 g/m² RecyStar® Nature"
                            },
                            {
                                "slug": "170gr_recystar_nature",
                                "name": "170 g/m² RecyStar® Nature"
                            },
                            {
                                "slug": "300gr_recystar_nature",
                                "name": "300 g/m² RecyStar® Nature"
                            },
                            {
                                "slug": "90gr_biotop",
                                "name": "90 g/m² Bio Top 3® natural"
                            },
                            {
                                "slug": "120gr_biotop",
                                "name": "120 g/m² Bio Top 3® natural"
                            },
                            {
                                "slug": "160gr_biotop",
                                "name": "160 g/m² Bio Top 3® natural"
                            },
                            {
                                "slug": "250gr_biotop",
                                "name": "250 g/m² Bio Top 3® natural"
                            },
                            {
                                "slug": "300gr_biotop",
                                "name": "300 g/m² Bio Top 3® natural"
                            },
                            {
                                "slug": "70gr_hvo",
                                "name": "70 g/m² uncoated (writable) recycled"
                            },
                            {
                                "slug": "90gr_hvo",
                                "name": "90 g/m² uncoated (writable)"
                            },
                            {
                                "slug": "120gr_hvo",
                                "name": "120 g/m² uncoated (writable)"
                            },
                            {
                                "slug": "170gr_hvo",
                                "name": "170 g/m² uncoated (writable)"
                            },
                            {
                                "slug": "250gr_hvo",
                                "name": "250 g/m² uncoated (writable)"
                            },
                            {
                                "slug": "300gr_hvo",
                                "name": "300 g/m² uncoated (writable)"
                            },
                            {
                                "slug": "350gr_hvo",
                                "name": "350 g/m² uncoated (writable)"
                            },
                            {
                                "slug": "300gr_hvo_nk",
                                "name": "300 g/m² uncoated offset natural carton"
                            },
                            {
                                "slug": "350gr_hvo_nk",
                                "name": "350 g/m² uncoated offset natural carton"
                            },
                            {
                                "slug": "400gr_hvo_nk",
                                "name": "400 g/m² offset (writable) natural cardboard"
                            },
                            {
                                "slug": "300gr_sbs_symbol_card",
                                "name": "300 g/m² Symbol Card one-sided coated sulphate cardboard"
                            },
                            {
                                "slug": "300gr_sbs",
                                "name": "300 g/m² MultiCard® single sided sulphate board"
                            },
                            {
                                "slug": "350gr_sbs",
                                "name": "350 g/m² MultiCard® single sided sulphate board "
                            },
                            {
                                "slug": "400gr_sbd",
                                "name": "400 g/m² double-sided coated sulphate carton"
                            },
                            {
                                "slug": "110gr_cromatico",
                                "name": "110gr cromatico"
                            },
                            {
                                "slug": "150gr_cromatico",
                                "name": "150gr cromatico"
                            },
                            {
                                "slug": "200gr_cromatico",
                                "name": "200gr cromatico"
                            },
                            {
                                "slug": "280gr_linnen",
                                "name": "280 g/m² Constellation Snow (linen)"
                            },
                            {
                                "slug": "250gr_tintoretto_gesso",
                                "name": "250gr Tinteretto Gesso"
                            },
                            {
                                "slug": "300gr_tintoretto_gesso",
                                "name": "300 g/m² Tintoretto Gesso"
                            },
                            {
                                "slug": "350gr_metallic_white",
                                "name": "350 g/m² Sirio metallic white"
                            },
                            {
                                "slug": "300gr_metallic_white",
                                "name": "300 g/m² Sirio metallic white"
                            },
                            {
                                "slug": "300gr_metallic_pearl",
                                "name": "300 g/m² Sirio metallic pearl"
                            },
                            {
                                "slug": "300gr_metallic_gold",
                                "name": "300 g/m² Sirio metallic gold"
                            },
                            {
                                "slug": "300gr_metallic_silver",
                                "name": "300 g/m² Sirio metallic silver"
                            },
                            {
                                "slug": "290gr_sirio_color_nero",
                                "name": "290 g/m² Sirio Colour Nero"
                            },
                            {
                                "slug": "90gr_paperwise_earth_pact_natural",
                                "name": "90 g/m² Paperwise® Earth Pact Natural"
                            },
                            {
                                "slug": "150gr_paperwise_earth_pact_natural",
                                "name": "150 g/m² Paperwise® Earth Pact Natural"
                            },
                            {
                                "slug": "295gr_paperwise_earth_pact_natural",
                                "name": "295 g/m² Paperwise® Earth Pact Natural"
                            },
                            {
                                "slug": "90gr_recystar",
                                "name": "90 g/m² BalancePure®"
                            },
                            {
                                "slug": "120gr_recystar",
                                "name": "120 g/m² BalancePure®"
                            },
                            {
                                "slug": "170gr_recystar",
                                "name": "170 g/m² BalancePure®"
                            },
                            {
                                "slug": "300gr_recystar",
                                "name": "300 g/m² BalancePure®"
                            },
                            {
                                "slug": "290gr_kraft_muskat",
                                "name": "290gr kraft muskat"
                            },
                            {
                                "slug": "300gr_king_board_white",
                                "name": "300gr King Board White"
                            },
                            {
                                "slug": "300gr_cotton_max_white",
                                "name": "300 g/m² Gmund Cotton Max White"
                            },
                            {
                                "slug": "300gr_cotton_linen_cream",
                                "name": "300 g/m² Gmund Cotton Linen Cream"
                            },
                            {
                                "slug": "300gr_cotton_gentlemen_blue",
                                "name": "300 g/m² Gmund Cotton Gentlemen Blue"
                            },
                            {
                                "slug": "170gr_synaps",
                                "name": "170 g/m² Synaps® (Rip-proof and water proof) "
                            },
                            {
                                "slug": "250gr_yupo",
                                "name": "200 g/m² YUPOBlue® - rip-proof, waterproof"
                            },
                            {
                                "slug": "300gr_yupo_blue_ypi",
                                "name": "234 g/m² YUPOBlue® - rip-proof, waterproof"
                            },
                            {
                                "slug": "350gr_yupo_blue_ypi",
                                "name": "276 g/m² YUPOBlue® - rip-proof, waterproof"
                            },
                            {
                                "slug": "400gr_yupo",
                                "name": "319 g/m² YUPOBlue® - rip-proof, waterproof"
                            }
                        ]
                    },
                    {
                        "slug": "finish",
                        "title": "Finish",
                        "options": [
                            {
                                "slug": "geen",
                                "name": "None"
                            },
                            {
                                "slug": "single_sided_gloss_lamination",
                                "name": "Single sided gloss lamination"
                            },
                            {
                                "slug": "single_sided_matt_lamination",
                                "name": "Single sided matt lamination"
                            },
                            {
                                "slug": "double_sided_gloss_lamination",
                                "name": "Double sided gloss lamination"
                            },
                            {
                                "slug": "double_sided_matt_lamination",
                                "name": "Double sided matt lamination"
                            },
                            {
                                "slug": "single_soft_touch_lamination",
                                "name": "Single soft touch matt lamination"
                            },
                            {
                                "slug": "double_soft_touch_lamination",
                                "name": "Double soft touch matt lamination"
                            },
                            {
                                "slug": "single_sided_scratch_resistant_laminate",
                                "name": "Single sided scratch resistant lamination"
                            },
                            {
                                "slug": "double_sided_scratch_resistant_laminate",
                                "name": "Double sided scratch resistant lamination"
                            },
                            {
                                "slug": "single_sided_linen_lamination",
                                "name": "Single sided linen lamination"
                            },
                            {
                                "slug": "double_sided_linen_lamination",
                                "name": "Double sided linen lamination"
                            }
                        ]
                    },
                    {
                        "slug": "spot_finish",
                        "title": "Spot finish",
                        "options": [
                            {
                                "slug": "none",
                                "name": "None"
                            },
                            {
                                "slug": "foil_gold",
                                "name": "Gold foil"
                            },
                            {
                                "slug": "foil_silver",
                                "name": "Silver foil"
                            },
                            {
                                "slug": "foil_rose",
                                "name": "Rose gold foil"
                            },
                            {
                                "slug": "foil_copper",
                                "name": "Copper foil"
                            },
                            {
                                "slug": "foil_glitter",
                                "name": "Glitter foil"
                            },
                            {
                                "slug": "foil_rainbow",
                                "name": "Rainbow foil"
                            },
                            {
                                "slug": "embossed_partial_gloss_40",
                                "name": "Embossed partial gloss (40 μm)"
                            },
                            {
                                "slug": "embossed_partial_gloss_80",
                                "name": "Embossed partial gloss (80 μm)"
                            }
                        ]
                    },
                    {
                        "slug": "spot_finish_back",
                        "title": "Spot finish backside",
                        "options": [
                            {
                                "slug": "none",
                                "name": "none"
                            },
                            {
                                "slug": "foil_gold",
                                "name": "Foil gold"
                            },
                            {
                                "slug": "foil_silver",
                                "name": "Foil silver"
                            },
                            {
                                "slug": "foil_rose",
                                "name": "Foil rose"
                            },
                            {
                                "slug": "foil_copper",
                                "name": "Foil copper"
                            },
                            {
                                "slug": "foil_glitter",
                                "name": "Foil glitter"
                            },
                            {
                                "slug": "foil_rainbow",
                                "name": "Foil rainbow"
                            },
                            {
                                "slug": "embossed_partial_gloss_40",
                                "name": "Embossed partial gloss 40"
                            },
                            {
                                "slug": "embossed_partial_gloss_80",
                                "name": "Embossed partial gloss 80"
                            }
                        ]
                    },
                    {
                        "slug": "copies",
                        "title": "Aantal",
                        "options": [
                            {
                                "slug": "25",
                                "name": "25",
                                "type": "digital"
                            },
                            {
                                "slug": "50",
                                "name": "50",
                                "type": "digital"
                            },
                            {
                                "slug": "100",
                                "name": "100",
                                "type": "digital"
                            },
                            {
                                "slug": 250,
                                "name": "250",
                                "type": "digital"
                            },
                            {
                                "slug": 500,
                                "name": "500",
                                "type": "digital"
                            },
                            {
                                "slug": 1000,
                                "name": "1000",
                                "type": "digital"
                            },
                            {
                                "slug": 25,
                                "name": "25",
                                "type": "inkjet"
                            },
                            {
                                "slug": 50,
                                "name": "50",
                                "type": "inkjet"
                            },
                            {
                                "slug": 100,
                                "name": "100",
                                "type": "inkjet"
                            },
                            {
                                "slug": 250,
                                "name": "250",
                                "type": "inkjet"
                            },
                            {
                                "slug": 500,
                                "name": "500",
                                "type": "inkjet"
                            },
                            {
                                "slug": 1000,
                                "name": "1000",
                                "type": "inkjet"
                            },
                            {
                                "slug": 10000,
                                "name": "10000",
                                "type": "offset"
                            },
                            {
                                "slug": 20000,
                                "name": "20000",
                                "type": "offset"
                            },
                            {
                                "slug": 30000,
                                "name": "30000",
                                "type": "offset"
                            },
                            {
                                "slug": 40000,
                                "name": "40000",
                                "type": "offset"
                            },
                            {
                                "slug": 50000,
                                "name": "50000",
                                "type": "offset"
                            }
                        ]
                    },
                    {
                        "slug": "clean_cut",
                        "title": "Clean cut",
                        "options": [
                            {
                                "slug": "no",
                                "name": "No"
                            },
                            {
                                "slug": "yes",
                                "name": "Yes"
                            }
                        ]
                    },
                    {
                        "slug": "variable_creasing_line",
                        "title": "Crease lines parallel",
                        "options": [
                            {
                                "slug": "none",
                                "name": "No creasing"
                            },
                            {
                                "slug": "1",
                                "name": "1"
                            },
                            {
                                "slug": "2",
                                "name": "2"
                            },
                            {
                                "slug": "3",
                                "name": "3"
                            },
                            {
                                "slug": "4",
                                "name": "4"
                            },
                            {
                                "slug": "5",
                                "name": "5"
                            }
                        ]
                    },
                    {
                        "slug": "perforation",
                        "title": "Perforation parallel",
                        "options": [
                            {
                                "slug": "none",
                                "name": "No perforation"
                            },
                            {
                                "slug": "1_perforation_line",
                                "name": "1 perforation line"
                            },
                            {
                                "slug": "2_perforation_lines",
                                "name": "2 perforation lines"
                            },
                            {
                                "slug": "3_perforation_lines",
                                "name": "3_perforation_lines"
                            },
                            {
                                "slug": "4_perforation_lines",
                                "name": "4_perforation_lines"
                            }
                        ]
                    },
                    {
                        "slug": "die_cut",
                        "title": "Contour",
                        "options": [
                            {
                                "slug": "no",
                                "name": "No",
                                "nullable": true,
                                "eco": false
                            },
                            {
                                "slug": "yes",
                                "name": "Yes",
                                "nullable": false,
                                "eco": false
                            }
                        ]
                    },
                    {
                        "slug": "drillholes",
                        "title": "Drill holes",
                        "options": [
                            {
                                "slug": "none",
                                "name": "None"
                            },
                            {
                                "slug": "one_drillhole_3mm",
                                "name": "one drillhole 3mm"
                            },
                            {
                                "slug": "two_drillholes_3mm",
                                "name": "two drillholes 3mm"
                            },
                            {
                                "slug": "three_drillholes_3mm",
                                "name": "three drillholes 3mm"
                            },
                            {
                                "slug": "four_drillholes_3mm",
                                "name": "four drillholes 3mm"
                            },
                            {
                                "slug": "one_drillhole_4mm",
                                "name": "One drillhole 4mm"
                            },
                            {
                                "slug": "two_drillholes_4mm",
                                "name": "two drillholes 4mm"
                            },
                            {
                                "slug": "one_drillhole_5mm",
                                "name": "One drillhole 5mm"
                            },
                            {
                                "slug": "two_drillholes_5mm",
                                "name": "two drillholes 5mm"
                            },
                            {
                                "slug": "one_drillhole",
                                "name": "One Drillhole (6 mm)"
                            },
                            {
                                "slug": "two_drillholes",
                                "name": "Two Drillholes (6 mm)"
                            },
                            {
                                "slug": "three_drillholes",
                                "name": "three_drillholes (6 mm)"
                            },
                            {
                                "slug": "four_drillholes",
                                "name": "Four Drillholes (6 mm)"
                            },
                            {
                                "slug": "one_drillhole_8mm",
                                "name": "one_drillhole_8mm"
                            },
                            {
                                "slug": "two_drillhole_8mm",
                                "name": "two_drillhole_8mm"
                            },
                            {
                                "slug": "three_drillhole_8mm",
                                "name": "three_drillhole_8mm"
                            },
                            {
                                "slug": "four_drillhole_8mm",
                                "name": "four_drillhole_8mm"
                            },
                            {
                                "slug": "one_drillhole_9mm",
                                "name": "one drillhole 9mm"
                            },
                            {
                                "slug": "two_drillholes_9mm",
                                "name": "two drillholes 9mm"
                            },
                            {
                                "slug": "three_drillholes_9mm",
                                "name": "three drillholes 9mm"
                            },
                            {
                                "slug": "four_drillholes_9mm",
                                "name": "four drillholes 9mm"
                            },
                            {
                                "slug": "one_drillhole_10mm",
                                "name": "one drillhole 10mm"
                            },
                            {
                                "slug": "two_drillholes_10mm",
                                "name": "two drillholes 10mm"
                            },
                            {
                                "slug": "three_drillholes_10mm",
                                "name": "three drillholes 10mm"
                            },
                            {
                                "slug": "four_drillholes_10mm",
                                "name": "four drillholes 10mm"
                            }
                        ]
                    },
                    {
                        "slug": "rounded_corners",
                        "title": "Rounded corners",
                        "options": [
                            {
                                "slug": "none",
                                "name": "None"
                            },
                            {
                                "slug": "3,5_mm_radius",
                                "name": "3,5 mm radius"
                            },
                            {
                                "slug": "7_mm_radius",
                                "name": "7 mm radius"
                            }
                        ]
                    },
                    {
                        "slug": "bundle",
                        "title": "Bundle",
                        "options": [
                            {
                                "slug": "bundle_per_25",
                                "name": "bundle per 25"
                            },
                            {
                                "slug": "bundle_per_50",
                                "name": "Bundle_per_50"
                            },
                            {
                                "slug": "bundle_per_100",
                                "name": "Bundle per 100"
                            },
                            {
                                "slug": "bundle_per_250",
                                "name": "Bundle per 250"
                            },
                            {
                                "slug": "bundle_per_500",
                                "name": "Bundle per 500"
                            }
                        ]
                    },
                    {
                        "slug": "standard_bundle",
                        "title": "Standard bundle",
                        "options": [
                            {
                                "slug": "yes",
                                "name": "Bundled"
                            },
                            {
                                "slug": "no",
                                "name": "no"
                            }
                        ]
                    },
                    {
                        "slug": "cross_bundle",
                        "title": "Cross bundle",
                        "options": [
                            {
                                "slug": "yes",
                                "name": "yes"
                            },
                            {
                                "slug": "no",
                                "name": "no"
                            }
                        ]
                    },
                    {
                        "slug": "printingmethod",
                        "title": "Printing method",
                        "options": [
                            {
                                "slug": "digital",
                                "name": "HP Indigo digital"
                            },
                            {
                                "slug": "inkjet",
                                "name": "Inkjet"
                            },
                            {
                                "slug": "offset",
                                "name": "Offset"
                            }
                        ]
                    }
                ],
                "excludes": [
                    [
                        {
                            "options": [
                                "115gr_gesatineerd_mc",
                                "150gr_gesatineerd_mc",
                                "200gr_gesatineerd_mc",
                                "300gr_gesatineerd_mc",
                                "115gr_silk_mc",
                                "150gr_silk_mc",
                                "200gr_silk_mc",
                                "115gr_recycled",
                                "170gr_recycled",
                                "240gr_sbs",
                                "350gr_sbs",
                                "500gr_sbd",
                                "250gr_tintoretto_gesso",
                                "280gr_linnen",
                                "280gr_kraft",
                                "381gr_kraft",
                                "300gr_metallic_white",
                                "300gr_metallic_pearl",
                                "300gr_metallic_gold",
                                "300gr_ice_silver_metallic",
                                "140gr_yupo_static_foil",
                                "300gr_yupo_blue_ypi",
                                "350gr_yupo_blue_ypi",
                                "300gr_tintoretto_gesso",
                                "350gr_metallic_white",
                                "300gr_metallic_silver",
                                "290gr_sirio_color_nero",
                                "350gr_sbd",
                                "250gr_sirio_materica_clay",
                                "290gr_sirio_color_pietra",
                                "400gr_sbd",
                                "200gr_yupo",
                                "250gr_yupo",
                                "400gr_yupo",
                                "350gr_hvo",
                                "300gr_cotton_max_white",
                                "300gr_cotton_linen_cream",
                                "300gr_cotton_new_grey",
                                "300gr_cotton_gentlemen_blue",
                                "300gr_conqueror_vergé_(crème)_high_white",
                                "300gr_conqueror_vergé_diamond_white",
                                "90gr_gesatineerd_mc",
                                "90gr_silk_mc",
                                "100gr_hv_bankpost",
                                "400gr_gesatineerd_mc",
                                "300gr_sbs",
                                "90gr_paperwise_earth_pact_natural",
                                "150gr_paperwise_earth_pact_natural",
                                "295gr_paperwise_earth_pact_natural",
                                "90gr_recystar",
                                "120gr_recystar",
                                "170gr_recystar",
                                "300gr_recystar",
                                "90gr_recystar_nature",
                                "120gr_recystar_nature",
                                "170gr_synaps",
                                "400gr_hvo_nk",
                                "70gr_hvo",
                                "80gr_hvo",
                                "350gr_atelier",
                                "290gr_kraft_muskat",
                                "440gr_kraft_muskat",
                                "120gr_hvo",
                                "300gr_recystar_nature",
                                "350gr_gesatineerd_mc",
                                "350gr_silk_mc",
                                "250gr_hvo",
                                "300gr_king_board_white",
                                "110gr_cromatico",
                                "150gr_cromatico",
                                "200gr_cromatico",
                                "90gr_biotop",
                                "120gr_biotop",
                                "160gr_biotop",
                                "250gr_biotop",
                                "300gr_biotop"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "options": [
                                "single_sided_gloss_lamination",
                                "single_sided_matt_lamination",
                                "single_soft_touch_lamination",
                                "single_sided_scratch_resistant_laminate",
                                "single_sided_linen_lamination"
                            ],
                            "property": "finish"
                        },
                        {
                            "options": [
                                "double_sided_embossed_partial_gloss_40",
                                "double_sided_partial_gloss",
                                "double_sided_partial_gloss_plus_foil_gold",
                                "double_sided_partial_gloss_plus_foil_silver",
                                "double_sided_partial_gloss_plus_foil_copper",
                                "double_sided_embossed_partial_gloss_40_plus_foil_gold",
                                "double_sided_embossed_partial_gloss_40_plus_foil_silver",
                                "double_sided_embossed_partial_gloss_40_plus_foil_copper",
                                "double_sided_embossed_partial_gloss_80",
                                "double_sided_foil_gold",
                                "double_sided_foil_silver",
                                "double_sided_foil_copper",
                                "double_sided_foil_rose",
                                "double_sided_foil_rainbow",
                                "double_sided_foil_glitter"
                            ],
                            "property": "spot_finish"
                        }
                    ],
                    [
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "double_sided_matt_lamination"
                            ],
                            "property": "finish"
                        },
                        {
                            "options": [
                                "90gr_gesatineerd_mc",
                                "115gr_gesatineerd_mc",
                                "135gr_gesatineerd_mc",
                                "150gr_gesatineerd_mc",
                                "170gr_gesatineerd_mc",
                                "200gr_gesatineerd_mc",
                                "300gr_gesatineerd_mc",
                                "350gr_gesatineerd_mc",
                                "115gr_silk_mc",
                                "90gr_silk_mc",
                                "135gr_silk_mc",
                                "150gr_silk_mc",
                                "170gr_silk_mc",
                                "200gr_silk_mc",
                                "350gr_silk_mc",
                                "90gr_eco",
                                "115gr_recycled",
                                "170gr_recycled",
                                "90gr_biotop",
                                "120gr_biotop",
                                "160gr_biotop",
                                "250gr_biotop",
                                "300gr_biotop",
                                "90gr_hv_offset",
                                "120gr_hvo",
                                "170gr_hvo",
                                "250gr_hvo",
                                "300gr_hvo",
                                "240gr_sbs",
                                "350gr_sbs",
                                "500gr_sbd",
                                "250gr_tintoretto_gesso",
                                "280gr_linnen",
                                "280gr_kraft",
                                "381gr_kraft",
                                "300gr_metallic_white",
                                "300gr_metallic_pearl",
                                "300gr_metallic_gold",
                                "300gr_ice_silver_metallic",
                                "300gr_zwart",
                                "140gr_yupo_static_foil",
                                "90gr_recycled",
                                "300gr_recycled",
                                "350gr_sbd",
                                "300gr_tintoretto_gesso",
                                "350gr_metallic_white",
                                "300gr_metallic_silver",
                                "120gr_recycled",
                                "160gr_recycled",
                                "90gr_hvo",
                                "290gr_sirio_color_pietra",
                                "250gr_sirio_materica_clay",
                                "290gr_sirio_color_nero",
                                "400gr_sbd",
                                "200gr_yupo",
                                "250gr_yupo",
                                "300gr_yupo_blue_ypi",
                                "350gr_yupo_blue_ypi",
                                "400gr_yupo",
                                "350gr_hvo",
                                "300gr_hvo_nk",
                                "350gr_hvo_nk",
                                "90gr_recystar",
                                "120gr_recystar",
                                "170gr_recystar",
                                "300gr_recystar",
                                "300gr_sbs",
                                "90gr_recystar_nature",
                                "120gr_recystar_nature",
                                "170gr_recystar_nature",
                                "300gr_recystar_nature",
                                "300gr_sbs_symbol_card",
                                "170gr_synaps",
                                "300gr_conqueror_vergé_(crème)_high_white",
                                "300gr_conqueror_vergé_diamond_white",
                                "90gr_hv_bankpost",
                                "100gr_hv_bankpost",
                                "400gr_hvo_nk",
                                "350gr_atelier",
                                "290gr_kraft_muskat",
                                "440gr_kraft_muskat",
                                "300gr_sbs_invercote"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "geen"
                            ],
                            "property": "finish"
                        },
                        {
                            "options": [
                                "500gr_sbd",
                                "350gr_sbs",
                                "240gr_sbs",
                                "350gr_sbd",
                                "400gr_sbd",
                                "300gr_sbs",
                                "350gr_atelier"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "single_sided_gloss_lamination",
                                "single_sided_matt_lamination",
                                "double_sided_gloss_lamination",
                                "double_sided_matt_lamination"
                            ],
                            "property": "finish"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "90gr_gesatineerd_mc",
                                "135gr_gesatineerd_mc",
                                "115gr_gesatineerd_mc",
                                "170gr_gesatineerd_mc",
                                "300gr_gesatineerd_mc",
                                "350gr_gesatineerd_mc",
                                "90gr_silk_mc",
                                "115gr_silk_mc",
                                "170gr_silk_mc",
                                "135gr_silk_mc",
                                "350gr_silk_mc",
                                "90gr_recycled",
                                "115gr_recycled",
                                "170gr_recycled",
                                "300gr_recycled",
                                "90gr_biotop",
                                "120gr_biotop",
                                "160gr_biotop",
                                "250gr_biotop",
                                "300gr_biotop",
                                "90gr_hv_offset",
                                "120gr_hvo",
                                "170gr_hvo",
                                "250gr_hvo",
                                "300gr_hvo",
                                "250gr_tintoretto_gesso",
                                "300gr_tintoretto_gesso",
                                "280gr_linnen",
                                "280gr_kraft",
                                "381gr_kraft",
                                "300gr_metallic_white",
                                "350gr_metallic_white",
                                "300gr_metallic_pearl",
                                "300gr_metallic_gold",
                                "300gr_metallic_silver",
                                "140gr_yupo_static_foil",
                                "300gr_yupo_blue_ypi",
                                "350gr_yupo_blue_ypi",
                                "90gr_hvo",
                                "120gr_recycled",
                                "160gr_recycled",
                                "200gr_yupo",
                                "250gr_yupo",
                                "400gr_yupo",
                                "90gr_paperwise_earth_pact_natural",
                                "150gr_paperwise_earth_pact_natural",
                                "295gr_paperwise_earth_pact_natural",
                                "350gr_hvo",
                                "300gr_hvo_nk",
                                "350gr_hvo_nk",
                                "90gr_recystar",
                                "120gr_recystar",
                                "170gr_recystar",
                                "300gr_recystar",
                                "90gr_recystar_nature",
                                "120gr_recystar_nature",
                                "170gr_recystar_nature",
                                "300gr_recystar_nature",
                                "90gr_hv_bankpost",
                                "100gr_hv_bankpost",
                                "400gr_hvo_nk",
                                "290gr_kraft_muskat",
                                "440gr_kraft_muskat",
                                "250gr_silk_mc",
                                "250gr_gesatineerd_mc"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "double_sided_gloss_lamination",
                                "double_sided_matt_lamination",
                                "double_soft_touch_lamination",
                                "double_sided_scratch_resistant_laminate",
                                "double_sided_linen_lamination"
                            ],
                            "property": "finish"
                        },
                        {
                            "options": [
                                "350gr_sbs",
                                "240gr_sbs",
                                "300gr_sbs",
                                "170gr_gesatineerd_mc",
                                "170gr_silk_mc",
                                "170gr_hvo",
                                "160gr_biotop",
                                "170gr_recystar",
                                "170gr_recystar_nature",
                                "120gr_recystar_nature",
                                "120gr_recystar",
                                "150gr_paperwise_earth_pact_natural",
                                "170gr_synaps",
                                "120gr_hvo",
                                "120gr_biotop",
                                "135gr_silk_mc",
                                "115gr_silk_mc",
                                "135gr_gesatineerd_mc",
                                "115gr_gesatineerd_mc",
                                "100gr_hv_bankpost",
                                "70gr_hvo",
                                "80gr_hvo",
                                "90gr_hv_bankpost",
                                "90gr_gesatineerd_mc",
                                "90gr_silk_mc",
                                "90gr_biotop",
                                "90gr_hvo",
                                "280gr_linnen",
                                "250gr_tintoretto_gesso",
                                "300gr_tintoretto_gesso",
                                "90gr_paperwise_earth_pact_natural",
                                "295gr_paperwise_earth_pact_natural",
                                "90gr_recystar_nature",
                                "440gr_kraft_muskat",
                                "290gr_kraft_muskat",
                                "300gr_conqueror_vergé_diamond_white",
                                "300gr_conqueror_vergé_(crème)_high_white",
                                "300gr_cotton_gentlemen_blue",
                                "300gr_cotton_new_grey",
                                "300gr_cotton_linen_cream",
                                "300gr_cotton_max_white",
                                "500gr_sbd",
                                "300gr_sbs_symbol_card",
                                "300gr_sbs_invercote"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "90gr_recycled",
                                "120gr_recycled",
                                "90gr_biotop",
                                "120gr_biotop",
                                "90gr_hvo",
                                "120gr_hvo",
                                "280gr_linnen",
                                "250gr_tintoretto_gesso",
                                "280gr_kraft",
                                "381gr_kraft",
                                "140gr_yupo_static_foil",
                                "90gr_paperwise_earth_pact_natural",
                                "150gr_paperwise_earth_pact_natural",
                                "90gr_recystar",
                                "120gr_recystar",
                                "200gr_yupo",
                                "90gr_recystar_nature",
                                "120gr_recystar_nature",
                                "300gr_conqueror_vergé_(crème)_high_white",
                                "300gr_conqueror_vergé_diamond_white",
                                "90gr_hv_bankpost",
                                "100gr_hv_bankpost",
                                "250gr_sirio_materica_clay",
                                "290gr_sirio_color_pietra",
                                "290gr_sirio_color_nero",
                                "300gr_tintoretto_gesso",
                                "70gr_hvo",
                                "80gr_hvo",
                                "290gr_kraft_muskat",
                                "440gr_kraft_muskat",
                                "300gr_cotton_max_white",
                                "300gr_cotton_gentlemen_blue",
                                "300gr_cotton_new_grey",
                                "300gr_cotton_linen_cream"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "single_sided_gloss_lamination",
                                "double_sided_gloss_lamination",
                                "single_sided_matt_lamination",
                                "double_sided_matt_lamination",
                                "single_soft_touch_lamination",
                                "double_soft_touch_lamination",
                                "single_sided_scratch_resistant_laminate",
                                "double_sided_scratch_resistant_laminate",
                                "double_sided_linen_lamination",
                                "single_sided_linen_lamination"
                            ],
                            "property": "finish"
                        }
                    ],
                    [
                        {
                            "options": [
                                "55_full_color_plus_white",
                                "50_full_color_plus_white"
                            ],
                            "property": "printtype"
                        },
                        {
                            "options": [
                                "90gr_gesatineerd_mc",
                                "115gr_gesatineerd_mc",
                                "135gr_gesatineerd_mc",
                                "170gr_gesatineerd_mc",
                                "250gr_gesatineerd_mc",
                                "300gr_gesatineerd_mc",
                                "350gr_gesatineerd_mc",
                                "400gr_gesatineerd_mc",
                                "90gr_silk_mc",
                                "115gr_silk_mc",
                                "135gr_silk_mc",
                                "170gr_silk_mc",
                                "250gr_silk_mc",
                                "300gr_silk_mc",
                                "350gr_silk_mc",
                                "400gr_silk_mc",
                                "90gr_recycled",
                                "120gr_recycled",
                                "160gr_recycled",
                                "300gr_recycled",
                                "90gr_biotop",
                                "160gr_biotop",
                                "120gr_biotop",
                                "250gr_biotop",
                                "300gr_biotop",
                                "90gr_hvo",
                                "120gr_hvo",
                                "170gr_hvo",
                                "250gr_hvo",
                                "300gr_hvo",
                                "240gr_sbs",
                                "300gr_sbs",
                                "350gr_sbd",
                                "500gr_sbd",
                                "280gr_linnen",
                                "300gr_tintoretto_gesso",
                                "250gr_tintoretto_gesso",
                                "300gr_metallic_white",
                                "350gr_metallic_white",
                                "300gr_yupo_blue_ypi",
                                "140gr_yupo_static_foil",
                                "350gr_yupo_blue_ypi",
                                "400gr_sbd",
                                "200gr_yupo",
                                "250gr_yupo",
                                "400gr_yupo",
                                "350gr_hvo",
                                "300gr_hvo_nk",
                                "350gr_hvo_nk",
                                "300gr_sbs_symbol_card",
                                "170gr_synaps",
                                "300gr_conqueror_vergé_diamond_white",
                                "300gr_conqueror_vergé_(crème)_high_white",
                                "90gr_hv_bankpost",
                                "100gr_hv_bankpost",
                                "350gr_sbs",
                                "400gr_hvo_nk",
                                "80gr_hvo",
                                "70gr_hvo",
                                "350gr_atelier",
                                "90gr_recystar_nature",
                                "120gr_recystar_nature",
                                "170gr_recystar_nature",
                                "300gr_recystar_nature",
                                "90gr_recystar",
                                "120gr_recystar",
                                "170gr_recystar",
                                "300gr_recystar",
                                "300gr_metallic_pearl",
                                "300gr_king_board_white"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "yes"
                            ],
                            "property": "die_cut"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "options": [
                                "55_full_color_plus_white",
                                "50_full_color_plus_white"
                            ],
                            "property": "printtype"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        }
                    ]
                ]
            },
            {
                "sku": "posters",
                "title": "Posters",
                "properties": [
                    {
                        "slug": "size",
                        "title": "Size",
                        "options": [
                            {
                                "slug": "abri",
                                "name": "Abri - 1185 x 1750 mm",
                                "width": 1185,
                                "height": 1750
                            },
                            {
                                "slug": "a0",
                                "name": "A0 - 840 x 1189 mm",
                                "width": "840",
                                "height": "1189"
                            },
                            {
                                "slug": "a1",
                                "name": "A1 - 594 x 840 mm",
                                "width": "594",
                                "height": "840"
                            },
                            {
                                "slug": "a2",
                                "name": "A2 - 420 x 594 mm",
                                "width": "420",
                                "height": "594"
                            },
                            {
                                "slug": "a3",
                                "name": "A3 - 297 x 420 mm",
                                "width": 297,
                                "height": 420
                            },
                            {
                                "slug": "a4",
                                "name": "A4 - 210 x 297 mm",
                                "width": "210",
                                "height": "297"
                            },
                            {
                                "slug": "b0",
                                "name": "B0 - 1000 x 1400 mm",
                                "width": 1000,
                                "height": 1400
                            },
                            {
                                "slug": "b1",
                                "name": "B1 - 700 x 1000 mm",
                                "width": 700,
                                "height": 1000
                            },
                            {
                                "slug": "b2",
                                "name": "B2 - 500 x 700 mm",
                                "width": 500,
                                "height": 700
                            },
                            {
                                "slug": "b3",
                                "name": "B3 - 350 x 500 mm",
                                "width": "350",
                                "height": "500"
                            },
                            {
                                "slug": "a1_large",
                                "name": "A1 large - 420 x 1189 mm",
                                "width": 420,
                                "height": 1189
                            },
                            {
                                "slug": "a2_large",
                                "name": "A2 large - 297 x 840 mm",
                                "width": 297,
                                "height": 840
                            },
                            {
                                "slug": "a3_large",
                                "name": "A3 large - 210 x 597 mm",
                                "width": 210,
                                "height": 597
                            },
                            {
                                "slug": "a4_large",
                                "name": "A4 large - 148 x 420 mm",
                                "width": "148",
                                "height": 420
                            },
                            {
                                "slug": "b1_large",
                                "name": "B1 large - 500 x 1400 mm",
                                "width": 500,
                                "height": 1400
                            },
                            {
                                "slug": "b2_large",
                                "name": "B2 large - 350 x 1000 mm",
                                "width": 350,
                                "height": 1000
                            },
                            {
                                "slug": "b3_large",
                                "name": "B3 large - 250 x 700 mm",
                                "width": 250,
                                "height": 700
                            },
                            {
                                "slug": "custom",
                                "nullable": false,
                                "customSizes": {
                                    "minHeight": 100,
                                    "sizeUnit": "MM",
                                    "minWidth": 100,
                                    "maxHeight": 5000,
                                    "maxWidth": 1230
                                }
                            }
                        ]
                    },
                    {
                        "slug": "printtype",
                        "title": "Print type",
                        "options": [
                            {
                                "slug": "10_pms_black",
                                "name": "1/0 PMS black"
                            },
                            {
                                "slug": "40",
                                "name": "4/0 Full colour"
                            },
                            {
                                "slug": "42",
                                "name": "4/2"
                            },
                            {
                                "slug": "43",
                                "name": "4/3"
                            },
                            {
                                "slug": "44_abri",
                                "name": "4/4 (mirrored)"
                            },
                            {
                                "slug": "44",
                                "name": "4/4 Full colour"
                            }
                        ]
                    },
                    {
                        "slug": "material",
                        "title": "Material",
                        "options": [
                            {
                                "slug": "95gr_neon_papier_geel",
                                "name": "95 g/m² Neon yellow paper"
                            },
                            {
                                "slug": "95gr_neon_papier_groen",
                                "name": "95 g/m² Neon green paper"
                            },
                            {
                                "slug": "95gr_neon_papier_magenta",
                                "name": "95 g/m² Neon magenta paper"
                            },
                            {
                                "slug": "95gr_neon_papier_oranje",
                                "name": "95 g/m² Neon orange paper"
                            },
                            {
                                "slug": "115gr_blueback",
                                "name": "115 g/m² Blueback - water resistant"
                            },
                            {
                                "slug": "135gr_gesatineerd_mc",
                                "name": "135 g/m² gloss"
                            },
                            {
                                "slug": "135gr_mat_mc",
                                "name": "135 g/m² matt"
                            },
                            {
                                "slug": "170gr_silk_mc",
                                "name": "170 g/m² silk"
                            },
                            {
                                "slug": "250gr_silk_mc",
                                "name": "250 g/m² silk"
                            },
                            {
                                "slug": "150gr_citylight",
                                "name": "150 g/m² Citylight"
                            },
                            {
                                "slug": "170gr_synaps",
                                "name": "170 g/m² Synaps® (Rip-proof and water proof)"
                            },
                            {
                                "slug": "250gr_gesatineerd_mc",
                                "name": "250 g/m² gloss"
                            },
                            {
                                "slug": "160gr_ijm814_uncoated",
                                "name": "160 g/m² uncoated premium high white"
                            },
                            {
                                "slug": "230gr_premium_matt",
                                "name": "230 g/m² matt coated premium"
                            },
                            {
                                "slug": "280gr_backlit_polyester",
                                "name": "280 g/m2 Backlit polyester"
                            },
                            {
                                "slug": "510gr_pvc",
                                "name": "510 g/m² frontlit B1 (PVC)"
                            }
                        ]
                    },
                    {
                        "slug": "finish",
                        "title": "Finish",
                        "options": [
                            {
                                "slug": "geen",
                                "name": "None"
                            },
                            {
                                "slug": "single_sided_gloss_lamination",
                                "name": "Single sided gloss lamination"
                            },
                            {
                                "slug": "single_sided_matt_lamination",
                                "name": "Single sided matt lamination"
                            },
                            {
                                "slug": "double_sided_gloss_lamination",
                                "name": "Double sided gloss lamination"
                            },
                            {
                                "slug": "double_sided_matt_lamination",
                                "name": "Double sided matt lamination"
                            },
                            {
                                "slug": "single_sided_whiteboard_laminate",
                                "name": "Single sided whiteboard laminate"
                            }
                        ]
                    },
                    {
                        "slug": "copies",
                        "title": "Aantal",
                        "options": [
                            {
                                "slug": 25,
                                "name": "25",
                                "type": "digital"
                            },
                            {
                                "slug": 50,
                                "name": "50",
                                "type": "digital"
                            },
                            {
                                "slug": 100,
                                "name": "100",
                                "type": "digital"
                            },
                            {
                                "slug": 250,
                                "name": "250",
                                "type": "digital"
                            },
                            {
                                "slug": 500,
                                "name": "500",
                                "type": "digital"
                            },
                            {
                                "slug": 1000,
                                "name": "1000",
                                "type": "digital"
                            },
                            {
                                "slug": 25,
                                "name": "25",
                                "type": "inkjet"
                            },
                            {
                                "slug": 50,
                                "name": "50",
                                "type": "inkjet"
                            },
                            {
                                "slug": 100,
                                "name": "100",
                                "type": "inkjet"
                            },
                            {
                                "slug": 250,
                                "name": "250",
                                "type": "inkjet"
                            },
                            {
                                "slug": 500,
                                "name": "500",
                                "type": "inkjet"
                            },
                            {
                                "slug": 1000,
                                "name": "1000",
                                "type": "inkjet"
                            },
                            {
                                "slug": 10000,
                                "name": "10000",
                                "type": "offset"
                            },
                            {
                                "slug": 20000,
                                "name": "20000",
                                "type": "offset"
                            },
                            {
                                "slug": 30000,
                                "name": "30000",
                                "type": "offset"
                            },
                            {
                                "slug": 40000,
                                "name": "40000",
                                "type": "offset"
                            },
                            {
                                "slug": 50000,
                                "name": "50000",
                                "type": "offset"
                            }
                        ]
                    },
                    {
                        "slug": "printingmethod",
                        "title": "Printing method",
                        "options": [
                            {
                                "slug": "digital",
                                "name": "HP Indigo digital",
                                "description": "HP Indigo digitaal"
                            },
                            {
                                "slug": "nano_print",
                                "name": "nano print",
                                "description": "nano print"
                            },
                            {
                                "slug": "offset",
                                "name": "Offset",
                                "description": "offset"
                            }
                        ]
                    },
                    {
                        "slug": "sheet_size",
                        "title": "Sheet size",
                        "options": [
                            {
                                "slug": "large_indigo_sheet",
                                "name": "large indigo sheet"
                            },
                            {
                                "slug": "small_indigo_sheet",
                                "name": "small indigo sheet"
                            }
                        ]
                    },
                    {
                        "slug": "custom_shape",
                        "title": "Custom shape",
                        "options": [
                            {
                                "slug": "custom_shape_simple",
                                "name": "Contour cut (1 simple shape)"
                            }
                        ]
                    },
                    {
                        "slug": "clean_cut",
                        "title": "Clean cut",
                        "options": [
                            {
                                "slug": "yes",
                                "name": "Yes",
                                "description": "Clean cut"
                            },
                            {
                                "slug": "no",
                                "name": "No"
                            }
                        ]
                    },
                    {
                        "slug": "customer_packing_option",
                        "title": "Choose packaging",
                        "options": [
                            {
                                "slug": "none",
                                "name": "No"
                            },
                            {
                                "slug": "rolled_up_in_box",
                                "name": "Rolled up in box"
                            },
                            {
                                "slug": "luxury_poster_packaging",
                                "name": "Luxury poster packaging"
                            },
                            {
                                "slug": "flat_in_box",
                                "name": "Flat in box"
                            },
                            {
                                "slug": "pallet_delivery",
                                "name": "Pallet delivery (see delivery costs)"
                            }
                        ]
                    }
                ],
                "excludes": [
                    [
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje",
                                "135gr_gesatineerd_mc",
                                "150gr_silk_mc",
                                "170gr_silk_mc",
                                "150gr_citylight",
                                "170gr_synaps",
                                "250gr_gesatineerd_mc",
                                "280gr_backlit_polyester",
                                "510gr_pvc"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "custom:width:-1800",
                                "custom:height:-1200"
                            ],
                            "property": "size"
                        }
                    ],
                    [
                        {
                            "options": [
                                "150gr_citylight",
                                "170gr_synaps",
                                "510gr_pvc",
                                "280gr_backlit_polyester",
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje",
                                "170gr_silk_mc",
                                "170gr_gesatineerd_mc",
                                "135gr_silk_mc",
                                "150gr_silk_mc",
                                "250gr_silk_mc"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "options": [
                                "single_sided_gloss_lamination",
                                "single_sided_matt_lamination",
                                "double_sided_matt_lamination",
                                "double_sided_gloss_lamination",
                                "single_sided_whiteboard_laminate"
                            ],
                            "property": "finish"
                        },
                        {
                            "options": [
                                "offset",
                                "nano_print"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "options": [
                                "510gr_pvc",
                                "115gr_blueback",
                                "170gr_synaps",
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje",
                                "150gr_citylight"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "single_sided_gloss_lamination",
                                "single_sided_matt_lamination",
                                "double_sided_gloss_lamination",
                                "double_sided_matt_lamination",
                                "single_sided_whiteboard_laminate"
                            ],
                            "property": "finish"
                        }
                    ],
                    [
                        {
                            "options": [
                                "yes"
                            ],
                            "property": "poster_fold"
                        },
                        {
                            "options": [
                                "abri",
                                "a4",
                                "b0",
                                "b1",
                                "b2",
                                "b3",
                                "a1_large",
                                "a2_large",
                                "a3_large",
                                "a4_large",
                                "b1_large",
                                "b2_large",
                                "b3_large",
                                "a0"
                            ],
                            "property": "size"
                        }
                    ],
                    [
                        {
                            "options": [
                                "yes"
                            ],
                            "property": "poster_fold"
                        },
                        {
                            "options": [
                                "digital"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "options": [
                                "yes"
                            ],
                            "property": "poster_fold"
                        },
                        {
                            "options": [
                                "115gr_blueback",
                                "150gr_silk_mc",
                                "510gr_pvc",
                                "150gr_citylight",
                                "170gr_silk_mc",
                                "135gr_mat_mc"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "double_sided_gloss_lamination",
                                "single_sided_matt_lamination",
                                "double_sided_matt_lamination",
                                "single_sided_whiteboard_laminate",
                                "single_sided_gloss_lamination"
                            ],
                            "property": "finish"
                        },
                        {
                            "options": [
                                "280gr_backlit_polyester"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "10_pms_black"
                            ],
                            "property": "printtype"
                        },
                        {
                            "options": [
                                "115gr_blueback",
                                "135gr_gesatineerd_mc",
                                "150gr_citylight",
                                "170gr_silk_mc",
                                "250gr_gesatineerd_mc",
                                "510gr_pvc",
                                "170gr_synaps",
                                "280gr_backlit_polyester",
                                "135gr_mat_mc",
                                "135gr_silk_mc",
                                "150gr_silk_mc",
                                "170gr_gesatineerd_mc",
                                "250gr_silk_mc"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "40",
                                "44_abri",
                                "43",
                                "42"
                            ],
                            "property": "printtype"
                        }
                    ],
                    [
                        {
                            "options": [
                                "44"
                            ],
                            "property": "printtype"
                        },
                        {
                            "options": [
                                "abri",
                                "a0",
                                "b0",
                                "a1_large",
                                "a2_large",
                                "b1_large",
                                "b1"
                            ],
                            "property": "size"
                        }
                    ],
                    [
                        {
                            "options": [
                                "42",
                                "43",
                                "44_abri"
                            ],
                            "property": "printtype"
                        },
                        {
                            "options": [
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje",
                                "115gr_blueback",
                                "150gr_citylight",
                                "280gr_backlit_polyester",
                                "510gr_pvc",
                                "170gr_synaps",
                                "170gr_silk_mc",
                                "250gr_gesatineerd_mc",
                                "135gr_gesatineerd_mc",
                                "150gr_silk_mc",
                                "250gr_silk_mc",
                                "230gr_premium_matt",
                                "160gr_ijm814_uncoated"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "double_sided_gloss_lamination",
                                "double_sided_matt_lamination"
                            ],
                            "property": "finish"
                        },
                        {
                            "options": [
                                "abri",
                                "a0",
                                "a1",
                                "b0",
                                "b1",
                                "a1_large",
                                "a2_large",
                                "b1_large",
                                "b2_large",
                                "b1_plus",
                                "b2_plus",
                                "a0_plus",
                                "a1_plus"
                            ],
                            "property": "size"
                        }
                    ],
                    [
                        {
                            "options": [
                                "135gr_mat_mc"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "a0",
                                "a1",
                                "a2",
                                "a4",
                                "b0",
                                "b1",
                                "b2",
                                "b3",
                                "a1_large",
                                "a2_large",
                                "a3_large",
                                "a4_large",
                                "b1_large",
                                "b2_large",
                                "b3_large",
                                "a2_plus",
                                "a1_plus",
                                "a0_plus",
                                "b2_plus",
                                "b1_plus",
                                "a3"
                            ],
                            "property": "size"
                        }
                    ],
                    [
                        {
                            "options": [
                                "abri"
                            ],
                            "property": "size"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje",
                                "135gr_gesatineerd_mc",
                                "150gr_citylight",
                                "170gr_silk_mc",
                                "170gr_synaps",
                                "280gr_backlit_polyester",
                                "250gr_gesatineerd_mc",
                                "510gr_pvc",
                                "160gr_ijm814_uncoated",
                                "250gr_silk_mc",
                                "150gr_silk_mc",
                                "230gr_premium_matt"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "42",
                                "43",
                                "44_abri"
                            ],
                            "property": "printtype"
                        },
                        {
                            "options": [
                                "digital"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "options": [
                                "44"
                            ],
                            "property": "printtype"
                        },
                        {
                            "options": [
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje",
                                "115gr_blueback",
                                "150gr_citylight",
                                "170gr_synaps",
                                "280gr_backlit_polyester",
                                "510gr_pvc",
                                "135gr_mat_mc"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "44"
                            ],
                            "property": "printtype"
                        },
                        {
                            "options": [
                                "single_sided_gloss_lamination",
                                "single_sided_matt_lamination",
                                "single_sided_whiteboard_laminate"
                            ],
                            "property": "finish"
                        }
                    ],
                    [
                        {
                            "options": [
                                "b0_plus",
                                "b1_plus",
                                "b2_plus",
                                "a0_plus",
                                "a1_plus"
                            ],
                            "property": "size"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "options": [
                                "a1",
                                "b2_large",
                                "b1_plus",
                                "b2_plus",
                                "a0_plus",
                                "a1_plus"
                            ],
                            "property": "size"
                        },
                        {
                            "options": [
                                "digital"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "44"
                            ],
                            "property": "printtype"
                        }
                    ],
                    [
                        {
                            "options": [
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje",
                                "135gr_gesatineerd_mc",
                                "115gr_blueback",
                                "135gr_mat_mc",
                                "135gr_silk_mc",
                                "150gr_silk_mc",
                                "170gr_silk_mc"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "single_sided_gloss_lamination",
                                "single_sided_matt_lamination",
                                "single_sided_whiteboard_laminate",
                                "double_sided_gloss_lamination",
                                "double_sided_matt_lamination"
                            ],
                            "property": "finish"
                        }
                    ],
                    [
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "luxury_poster_packaging"
                            ],
                            "property": "delivery"
                        }
                    ],
                    [
                        {
                            "options": [
                                "280gr_backlit_polyester"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "single_sided_gloss_lamination",
                                "single_sided_matt_lamination",
                                "single_sided_whiteboard_laminate",
                                "double_sided_gloss_lamination",
                                "double_sided_matt_lamination"
                            ],
                            "property": "finish"
                        }
                    ],
                    [
                        {
                            "options": [
                                "a0",
                                "abri",
                                "a1",
                                "b0",
                                "b1",
                                "a1_large",
                                "b1_large",
                                "b2_large",
                                "a2_large",
                                "b1_plus",
                                "b2_plus",
                                "a0_plus",
                                "a1_plus"
                            ],
                            "property": "size"
                        },
                        {
                            "options": [
                                "170gr_gesatineerd_mc"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "custom:width:-500",
                                "custom:height:-700"
                            ],
                            "property": "size"
                        },
                        {
                            "options": [
                                "double_sided_gloss_lamination",
                                "double_sided_matt_lamination"
                            ],
                            "property": "finish"
                        }
                    ],
                    [
                        {
                            "options": [
                                "135gr_mat_mc"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "digital"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "options": [
                                "custom:width:-500",
                                "custom:height:-700"
                            ],
                            "property": "size"
                        },
                        {
                            "options": [
                                "digital"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "44"
                            ],
                            "property": "printtype"
                        }
                    ],
                    [
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "135gr_mat_mc"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "custom:width:-1150",
                                "custom:height:-1750"
                            ],
                            "property": "size"
                        }
                    ],
                    [
                        {
                            "options": [
                                "115gr_blueback"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "custom:width:148-1400",
                                "custom:height:148-1000"
                            ],
                            "property": "size"
                        }
                    ],
                    [
                        {
                            "options": [
                                50,
                                75,
                                100,
                                150,
                                0,
                                "25",
                                "10",
                                "5",
                                1,
                                200,
                                250,
                                300,
                                350,
                                400,
                                450
                            ],
                            "property": "copies"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "custom:width:420-",
                                "custom:height:594-",
                                "a4",
                                "a3_large",
                                "a4_large"
                            ],
                            "property": "size"
                        }
                    ],
                    [
                        {
                            "options": [
                                "160gr_ijm814_uncoated",
                                "230gr_premium_matt"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "options": [
                                "160gr_ijm814_uncoated",
                                "230gr_premium_matt"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "single_sided_gloss_lamination",
                                "single_sided_matt_lamination",
                                "double_sided_gloss_lamination",
                                "double_sided_matt_lamination",
                                "single_sided_whiteboard_laminate"
                            ],
                            "property": "finish"
                        }
                    ],
                    [
                        {
                            "options": [
                                "160gr_ijm814_uncoated",
                                "230gr_premium_matt"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "10_pms_black",
                                "42",
                                "43",
                                "44",
                                "44_abri"
                            ],
                            "property": "printtype"
                        }
                    ],
                    [
                        {
                            "options": [
                                "double_sided_matt_lamination",
                                "double_sided_gloss_lamination"
                            ],
                            "property": "finish"
                        },
                        {
                            "options": [
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje",
                                "115gr_blueback",
                                "135gr_gesatineerd_mc",
                                "135gr_mat_mc",
                                "150gr_silk_mc",
                                "170gr_silk_mc",
                                "150gr_citylight",
                                "170gr_synaps",
                                "160gr_ijm814_uncoated",
                                "280gr_backlit_polyester",
                                "510gr_pvc",
                                "230gr_premium_matt"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "250gr_gesatineerd_mc"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "a0",
                                "a1",
                                "a2",
                                "a1_large",
                                "b2",
                                "b1",
                                "b0"
                            ],
                            "property": "size"
                        },
                        {
                            "options": [
                                "default"
                            ],
                            "property": "delivery"
                        }
                    ],
                    [
                        {
                            "options": [
                                "custom:width:-500",
                                "custom:height:-700"
                            ],
                            "property": "size"
                        },
                        {
                            "options": [
                                "250gr_gesatineerd_mc"
                            ],
                            "property": "material"
                        },
                        {
                            "options": [
                                "offset",
                                "nano_print"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "default"
                            ],
                            "property": "delivery"
                        }
                    ],
                    [
                        {
                            "options": [
                                "abri"
                            ],
                            "property": "size"
                        },
                        {
                            "options": [
                                "160gr_ijm814_uncoated",
                                "230gr_premium_matt",
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "abri"
                            ],
                            "property": "size"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "rolled_up_in_box",
                                "luxury_poster_packaging",
                                "flat_in_box"
                            ],
                            "property": "customer_packing_option"
                        }
                    ],
                    [
                        {
                            "options": [
                                "rolled_up_in_box",
                                "luxury_poster_packaging"
                            ],
                            "property": "customer_packing_option"
                        },
                        {
                            "options": [
                                "offset",
                                "nano_print"
                            ],
                            "property": "printingmethod"
                        },
                        {
                            "options": [
                                "250gr_gesatineerd_mc"
                            ],
                            "property": "material"
                        }
                    ],
                    [
                        {
                            "options": [
                                "flat_in_box"
                            ],
                            "property": "customer_packing_option"
                        },
                        {
                            "options": [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23,
                                24
                            ],
                            "property": "copies"
                        }
                    ],
                    [
                        {
                            "options": [
                                "luxury_poster_packaging"
                            ],
                            "property": "customer_packing_option"
                        },
                        {
                            "options": [
                                "offset"
                            ],
                            "property": "printingmethod"
                        }
                    ],
                    [
                        {
                            "property": "material",
                            "options": [
                                "115gr_blueback"
                            ]
                        },
                        {
                            "property": "printingmethod",
                            "options": [
                                "digital"
                            ]
                        },
                        {
                            "property": "size",
                            "options": [
                                "custom:width:148-1230",
                                "custom:height:148-"
                            ]
                        }
                    ],
                    [
                        {
                            "property": "copies",
                            "options": [
                                1,
                                5,
                                10,
                                25,
                                50,
                                75,
                                100,
                                150,
                                200,
                                250,
                                300,
                                350,
                                400,
                                450
                            ]
                        },
                        {
                            "property": "printingmethod",
                            "options": [
                                "offset"
                            ]
                        },
                        {
                            "property": "printtype",
                            "options": [
                                "44"
                            ]
                        }
                    ],
                    [
                        {
                            "property": "size",
                            "options": [
                                "abri",
                                "a0",
                                "b0",
                                "b1",
                                "a1_large",
                                "a2_large",
                                "b1_large",
                                "b2_large",
                                "b3_large",
                                "b1_plus",
                                "b2_plus",
                                "a0_plus",
                                "a1_plus",
                                "a2_plus",
                                "a1",
                                "custom:width:50-500",
                                "custom:height:50-700"
                            ]
                        },
                        {
                            "property": "customer_packing_option",
                            "options": [
                                "flat_in_box"
                            ]
                        }
                    ],
                    [
                        {
                            "property": "printingmethod",
                            "options": [
                                "nano_print"
                            ]
                        },
                        {
                            "property": "size",
                            "options": [
                                "abri",
                                "a0",
                                "a3",
                                "a4",
                                "b0",
                                "b3",
                                "a1_large",
                                "a3_large",
                                "a4_large",
                                "b1_large",
                                "b3_large",
                                "b1_plus",
                                "a0_plus"
                            ]
                        }
                    ],
                    [
                        {
                            "property": "printingmethod",
                            "options": [
                                "nano_print"
                            ]
                        },
                        {
                            "property": "material",
                            "options": [
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje",
                                "115gr_blueback",
                                "135gr_mat_mc",
                                "150gr_citylight",
                                "170gr_synaps",
                                "250gr_silk_mc",
                                "160gr_ijm814_uncoated",
                                "230gr_premium_matt",
                                "280gr_backlit_polyester",
                                "510gr_pvc"
                            ]
                        }
                    ],
                    [
                        {
                            "property": "customer_packing_option",
                            "options": [
                                "pallet_delivery"
                            ]
                        },
                        {
                            "property": "material",
                            "options": [
                                "150gr_citylight",
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje"
                            ]
                        }
                    ],
                    [
                        {
                            "property": "customer_packing_option",
                            "options": [
                                "luxury_poster_packaging"
                            ]
                        },
                        {
                            "property": "printingmethod",
                            "options": [
                                "nano_print"
                            ]
                        }
                    ],
                    [
                        {
                            "property": "material",
                            "options": [
                                "95gr_neon_papier_geel",
                                "95gr_neon_papier_groen",
                                "95gr_neon_papier_magenta",
                                "95gr_neon_papier_oranje"
                            ]
                        },
                        {
                            "property": "size",
                            "options": [
                                "a0",
                                "b0",
                                "a0_plus",
                                "custom:width:100-810",
                                "custom:height:100-5000"
                            ]
                        }
                    ],
                    [
                        {
                            "property": "size",
                            "options": [
                                "custom:width:1000-1185",
                                "custom:height:1400-1750"
                            ]
                        },
                        {
                            "property": "printingmethod",
                            "options": [
                                "offset"
                            ]
                        },
                        {
                            "property": "material",
                            "options": [
                                "135gr_mat_mc"
                            ]
                        }
                    ],
                    [
                        {
                            "property": "printtype",
                            "options": [
                                "42",
                                "43",
                                "44_abri",
                                "44",
                                "10_pms_black"
                            ]
                        },
                        {
                            "property": "printingmethod",
                            "options": [
                                "nano_print"
                            ]
                        }
                    ]
                ]
            }
        ]
    }),
})