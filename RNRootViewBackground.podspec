
Pod::Spec.new do |s|
  s.name         = "RNRootViewBackground"
  s.version      = "1.0.0"
  s.summary      = "RNRootViewBackground"
  s.description  = <<-DESC
                  RNRootViewBackground
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNRootViewBackground.git", :tag => "master" }
  s.source_files  = "RNRootViewBackground/**/*.{h,m}"
  s.requires_arc = true
  s.homepage     = "https://github.com/yuntitech/react-native-root-view-background"


  s.dependency "React"
  #s.dependency "others"

end

  