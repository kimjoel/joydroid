Paperclip.interpolates(:s3_ap_url) do |att, style|
    "#{att.s3_protocol}://s3-ap-southeast-2.amazonaws.com/#{att.bucket_name}/#{att.path(style)}"
end

module AWS
    module S3
        DEFAULT_HOST = "s3-ap-southeast-2.amazonaws.com"
    end
end