import {
  AccessibilityEnum,
  GitIgnoreEnum,
  LicenseEnum,
} from './enums'

export type Accessibility =
  `${AccessibilityEnum.Public}` |
  `${AccessibilityEnum.Private}` |
  `${AccessibilityEnum.Internal}`

export type GitIgnore =
  // `${GitIgnoreEnum.AL}` |
  `${GitIgnoreEnum.Actionscript}` |
  `${GitIgnoreEnum.Ada}` |
  `${GitIgnoreEnum.Agda}` |
  `${GitIgnoreEnum.Android}` |
  `${GitIgnoreEnum.AppEngine}` |
  `${GitIgnoreEnum.AppceleratorTitanium}` |
  `${GitIgnoreEnum.ArchLinuxPackages}` |
  `${GitIgnoreEnum.Autotools}` |
  `${GitIgnoreEnum.CPlus}` |
  `${GitIgnoreEnum.C}` |
  `${GitIgnoreEnum.CFWheels}` |
  `${GitIgnoreEnum.CMake}` |
  `${GitIgnoreEnum.CUDA}` |
  `${GitIgnoreEnum.CakePHP}` |
  `${GitIgnoreEnum.ChefCookbook}` |
  `${GitIgnoreEnum.Clojure}` |
  `${GitIgnoreEnum.CodeIgniter}` |
  `${GitIgnoreEnum.CommonLisp}` |
  `${GitIgnoreEnum.Composer}` |
  `${GitIgnoreEnum.Concrete5}` |
  `${GitIgnoreEnum.Coq}` |
  `${GitIgnoreEnum.CraftCMS}` |
  `${GitIgnoreEnum.D}` |
  `${GitIgnoreEnum.DM}` |
  `${GitIgnoreEnum.Dart}` |
  `${GitIgnoreEnum.Delphi}` |
  `${GitIgnoreEnum.Drupal}` |
  `${GitIgnoreEnum.EPiServer}` |
  `${GitIgnoreEnum.Eagle}` |
  `${GitIgnoreEnum.Elisp}` |
  `${GitIgnoreEnum.Elixir}` |
  `${GitIgnoreEnum.Elm}` |
  `${GitIgnoreEnum.Erlang}` |
  `${GitIgnoreEnum.ExpressionEngine}` |
  `${GitIgnoreEnum.ExtJs}` |
  `${GitIgnoreEnum.Fancy}` |
  `${GitIgnoreEnum.Finale}` |
  // `${GitIgnoreEnum.FlaxEngine}` |
  `${GitIgnoreEnum.ForceDotCom}` |
  `${GitIgnoreEnum.Fortran}` |
  `${GitIgnoreEnum.FuelPHP}` |
  `${GitIgnoreEnum.GWT}` |
  // `${GitIgnoreEnum.Gcov}` |
  `${GitIgnoreEnum.gcov}` |
  `${GitIgnoreEnum.GitBook}` |
  `${GitIgnoreEnum.Go}` |
  `${GitIgnoreEnum.Godot}` |
  `${GitIgnoreEnum.Gradle}` |
  `${GitIgnoreEnum.Grails}` |
  `${GitIgnoreEnum.Haskell}` |
  `${GitIgnoreEnum.IGORPro}` |
  `${GitIgnoreEnum.Idris}` |
  `${GitIgnoreEnum.JBoss}` |
  `${GitIgnoreEnum.JenkinsHome}` |
  `${GitIgnoreEnum.Java}` |
  `${GitIgnoreEnum.Jekyll}` |
  `${GitIgnoreEnum.Joomla}` |
  `${GitIgnoreEnum.Julia}` |
  // `${GitIgnoreEnum.KiCad}` |
  `${GitIgnoreEnum.KiCAD}` |
  `${GitIgnoreEnum.Kohana}` |
  `${GitIgnoreEnum.Kotlin}` |
  `${GitIgnoreEnum.LabVIEW}` |
  `${GitIgnoreEnum.Laravel}` |
  `${GitIgnoreEnum.Leiningen}` |
  `${GitIgnoreEnum.LemonStand}` |
  `${GitIgnoreEnum.Lilypond}` |
  `${GitIgnoreEnum.Lithium}` |
  `${GitIgnoreEnum.Lua}` |
  `${GitIgnoreEnum.Magento}` |
  `${GitIgnoreEnum.Maven}` |
  `${GitIgnoreEnum.Mercury}` |
  `${GitIgnoreEnum.MetaProgrammingSystem}` |
  `${GitIgnoreEnum.Nim}` |
  // `${GitIgnoreEnum.Nanoc}` |
  `${GitIgnoreEnum.nanoc}` |
  `${GitIgnoreEnum.Node}` |
  `${GitIgnoreEnum.OCaml}` |
  `${GitIgnoreEnum.ObjectiveC}` |
  `${GitIgnoreEnum.Opa}` |
  // `${GitIgnoreEnum.OpenCart}` |
  `${GitIgnoreEnum.opencart}` |
  `${GitIgnoreEnum.OracleForms}` |
  `${GitIgnoreEnum.Packer}` |
  `${GitIgnoreEnum.Perl}` |
  `${GitIgnoreEnum.Perl6}` |
  `${GitIgnoreEnum.Phalcon}` |
  `${GitIgnoreEnum.PlayFramework}` |
  `${GitIgnoreEnum.Plone}` |
  `${GitIgnoreEnum.Prestashop}` |
  `${GitIgnoreEnum.Processing}` |
  `${GitIgnoreEnum.PureScript}` |
  `${GitIgnoreEnum.Python}` |
  `${GitIgnoreEnum.Qooxdoo}` |
  `${GitIgnoreEnum.Qt}` |
  `${GitIgnoreEnum.R}` |
  `${GitIgnoreEnum.ROS}` |
  // `${GitIgnoreEnum.Racket}` |
  `${GitIgnoreEnum.Rails}` |
  // `${GitIgnoreEnum.Raku}` |
  `${GitIgnoreEnum.RhodesRhomobile}` |
  `${GitIgnoreEnum.Ruby}` |
  `${GitIgnoreEnum.Rust}` |
  `${GitIgnoreEnum.SCons}` |
  `${GitIgnoreEnum.Sass}` |
  `${GitIgnoreEnum.Scala}` |
  `${GitIgnoreEnum.Scheme}` |
  `${GitIgnoreEnum.Scrivener}` |
  `${GitIgnoreEnum.Sdcc}` |
  `${GitIgnoreEnum.SeamGen}` |
  `${GitIgnoreEnum.SketchUp}` |
  `${GitIgnoreEnum.Smalltalk}` |
  // `${GitIgnoreEnum.Stella}` |
  `${GitIgnoreEnum.stella}` |
  `${GitIgnoreEnum.SugarCRM}` |
  `${GitIgnoreEnum.Swift}` |
  `${GitIgnoreEnum.Symfony}` |
  `${GitIgnoreEnum.SymphonyCMS}` |
  `${GitIgnoreEnum.TeX}` |
  `${GitIgnoreEnum.Terraform}` |
  `${GitIgnoreEnum.Textpattern}` |
  `${GitIgnoreEnum.TurboGears2}` |
  // `${GitIgnoreEnum.TwinCAT3}` |
  `${GitIgnoreEnum.Typo3}` |
  `${GitIgnoreEnum.Umbraco}` |
  `${GitIgnoreEnum.Unity}` |
  `${GitIgnoreEnum.UnrealEngine}` |
  `${GitIgnoreEnum.VVVV}` |
  `${GitIgnoreEnum.VisualStudio}` |
  `${GitIgnoreEnum.Waf}` |
  `${GitIgnoreEnum.WordPress}` |
  `${GitIgnoreEnum.Xojo}` |
  `${GitIgnoreEnum.Yeoman}` |
  `${GitIgnoreEnum.Yii}` |
  `${GitIgnoreEnum.ZendFramework}` |
  `${GitIgnoreEnum.Zephir}`

export type License =
  `${LicenseEnum.AGPL3}` | // 'GNU Affero General Public License v3.0',
  `${LicenseEnum.Apache}` | // 'Apache License 2.0',
  `${LicenseEnum.BSD2}` | // 'BSD 2-Clause "Simplified" License',
  `${LicenseEnum.BSD3}` | // 'BSD 3-Clause "New" or "Revised" License',
  `${LicenseEnum.BSL1}` | // 'Boost Software License 1.0',
  `${LicenseEnum.CC0}` | // 'Creative Commons Zero v1.0 Universal',
  `${LicenseEnum.EPL}` | // 'Eclipse Public License 2.0',
  `${LicenseEnum.GPL2}` | // 'GNU General Public License v2.0',
  `${LicenseEnum.GPL3}` | // 'GNU General Public License v3.0',
  `${LicenseEnum.LGPL}` | // 'GNU Lesser General Public License v2.1',
  `${LicenseEnum.MIT}` | // 'MIT License',
  `${LicenseEnum.MPL}` | // 'Mozilla Public License 2.0',
  `${LicenseEnum.Unlicense}` // 'The Unlicense',

export type Options = {
  accessibility?: Accessibility,
  desciption?: string,
  disableIssues?: boolean,
  disableWiki?: boolean,
  gitIgnore?: GitIgnore,
  homePage?: string,
  license?: License,
  remote?: string,
  team?: string,
  verbose?: boolean,
}

export type Result = {
  owner: string,
  repo: string,
  url: string,
}
