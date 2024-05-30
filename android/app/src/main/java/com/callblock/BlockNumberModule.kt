package com.callblock

import android.content.ContentValues
import android.net.Uri
import android.provider.BlockedNumberContract
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback

class BlockNumberModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  
    override fun getName(): String {
        return "BlockNumberModule"
    }

    @ReactMethod
    fun blockNumber(phoneNumber: String, callback: Callback) {
        try {
            val values = ContentValues().apply {
                put(BlockedNumberContract.BlockedNumbers.COLUMN_ORIGINAL_NUMBER, phoneNumber)
            }
            val uri: Uri? = reactApplicationContext.contentResolver.insert(BlockedNumberContract.BlockedNumbers.CONTENT_URI, values)
            callback.invoke(null, uri != null)
        } catch (e: Exception) {
            callback.invoke(e.message, false)
        }
    }
}
